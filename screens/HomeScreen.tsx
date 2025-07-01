import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
import { Menu, User, X } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const screenWidth = Dimensions.get('window').width;

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { user, logout } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('User no HomeScreen:', user);
  }, [user]);

  const navigationOptions = [
    { id: 1, title: 'Exercícios', screen: 'Exercise' },
    { id: 2, title: 'Sua agenda', screen: 'Agenda' },
    { id: 3, title: 'Feedback da Dr.a', screen: 'Feedback' },
  ];

  const handleLogout = async () => {
    await logout();
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Menu color="white" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profile} onPress={() => setModalVisible(true)}>
            <View style={styles.avatar}>
              <User size={28} />
            </View>
            <Text style={styles.profileText}>
              {user?.nome && user?.sobrenome
                ? `${user.nome} ${user.sobrenome}`
                : 'Paciente'}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Área do paciente</Text>

          <View style={styles.searchSection}>
            {/* Campo de pesquisa pode ser implementado aqui */}
          </View>

          <View style={styles.whiteSection}>
            <Text style={styles.welcomeText}>
              Olá {user?.nome ?? 'Paciente'}, este é seu espaço pessoal de fisioterapia
            </Text>

            <View style={styles.buttonGroup}>
              {navigationOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={styles.button}
                  onPress={() => navigation.navigate(option.screen)}
                >
                  <Text style={styles.buttonText}>{option.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.aboutButton}
              onPress={() => navigation.navigate('About')}
            >
              <Text style={styles.aboutText}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Modal animationType="slide" transparent visible={modalVisible}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {/* Ícone X no topo direito */}
              <TouchableOpacity 
                style={styles.closeIconContainer} 
                onPress={() => setModalVisible(false)}
                accessibilityLabel="Fechar modal"
              >
                <X size={24} color="#7fb2ff" />
              </TouchableOpacity>

              <Text style={styles.modalTitle}>Dados do Paciente</Text>
              <Text style={styles.modalText}>
                Nome: {user?.nome ? `${user.nome} ${user.sobrenome ?? ''}` : ''}
              </Text>
              <Text style={styles.modalText}>
                ID Paciente: {user?.pacienteId ?? ''}
              </Text>

              <Pressable style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Sair da Conta</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7fb2ff',
  },
  wrapper: {
    flex: 1,
    width: screenWidth,
    backgroundColor: '#7fb2ff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    minHeight: 60,
  },
  menuButton: {
    marginLeft: 10,
  },
  profile: {
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  profileText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 4,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    alignSelf: 'center',
  },
  searchSection: {
    backgroundColor: '#7fb2ff',
    alignItems: 'center',
    marginBottom: 20,
  },
  whiteSection: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  welcomeText: {
    color: '#bebebe',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonGroup: {
    gap: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#7fb2ff',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
  aboutButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  aboutText: {
    color: '#7fb2ff',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    width: '80%',
    alignItems: 'center',
    position: 'relative', // necessário para posicionar o X
  },
  closeIconContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4,
    zIndex: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#7fb2ff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
