import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.item}>Nome: Minha Fisio App</Text>
      <Text style={styles.item}>Versão: 1.0.0 (MVP)</Text>
      <Text style={styles.item}>Desenvolvedores:</Text>
      <Text style={styles.developer}>- Matheus Wagner Teixeira</Text>
      <Text style={styles.developer}>- Gabriel Lehmen</Text>
      <Text style={styles.developer}>- Gabriel Gattino Reus</Text>
      <Text style={styles.developer}>- Aquiles Schluter</Text>

      <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.topButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center',
    color: '#7fb2ff',
  },
  item: {
    fontSize: 18,
    marginBottom: 16,
    color: '#444',
  },
  developer: {
    fontSize: 16,
    marginLeft: 12,
    color: '#666',
  },
  topButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    backgroundColor: '#7fb2ff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    zIndex: 10,
  },
  topButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
