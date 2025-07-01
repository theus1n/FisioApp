import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useAuth } from '../context/AuthContext';

type Credentials = {
  login: string;
  password: string;
};

export default function LoginScreen() {
  const [credentials, setCredentials] = useState<Credentials>({ login: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    const { login: loginInput, password: senhaInput } = credentials;

    if (!loginInput || !senhaInput) {
      Alert.alert('Aviso', 'Por favor, preencha login e senha');
      return;
    }

    setLoading(true);
    try {
      const url =
        'https://script.google.com/macros/s/AKfycbya63daudlWdwrE4pYmu2HK6d0LHBKKBW-3wy6il1ecTnHNBJiaLAXTXf5YQEuyzPhmpw/exec';
      const response = await fetch(url);
      const users = await response.json();

      const found = users.find(
        (u: any) =>
          (u.login?.trim() === loginInput.trim() || u.Login?.trim() === loginInput.trim()) &&
          (u.senha?.trim() === senhaInput.trim() || u.Senha?.trim() === senhaInput.trim())
      );

      if (found) {
        console.log('Found user raw:', found);
        const userData = {
          nome: found.nome ?? found.Nome ?? '',
          sobrenome: found.sobrenome ?? found.Sobrenome ?? '',
          nascimento: found.nascimento ?? found.Nascimento ?? '',
          pacienteId: found.pacienteId ?? found.PacienteId ?? '',
          login: found.login ?? found.Login ?? '',
        };

        console.log('User data to login:', userData);

        await login(userData);
      } else {
        Alert.alert('Erro', 'Login ou senha inválidos');
      }
    } catch (e) {
      Alert.alert('Erro', 'Falha na autenticação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={credentials.login}
        onChangeText={(t) => setCredentials({ ...credentials, login: t })}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={credentials.password}
        onChangeText={(t) => setCredentials({ ...credentials, password: t })}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7fb2ff',
    marginBottom: 40,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#7fb2ff',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});
