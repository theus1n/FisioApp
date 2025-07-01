import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type FeedbackItem = {
  id: string;
  Título: string;
  Feedback: string;
};

const feedbackList: FeedbackItem[] = [
  {
    id: '1',
    Título: 'Elevação de quadril',
    Feedback: 'Muito bom! Continue evoluindo e atente-se à postura.',
  },
  {
    id: '2',
    Título: 'Agachamento na parede',
    Feedback: 'Realizou com boa técnica. Podemos aumentar a carga em breve.',
  },
  {
    id: '3',
    Título: 'Ponte unilateral',
    Feedback: 'Excelente progresso. Só precisa controlar melhor o tempo de execução.',
  },
];

export default function FeedbackScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.topButtonText}>Voltar</Text>
      </TouchableOpacity>
      <View style={{ height: 32 }} />
      <Text style={styles.title}>Feedback da Dr.a</Text>
      <FlatList
        data={feedbackList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.exerciseTitle}>{item.Título}</Text>
            <Text style={styles.feedback}>{item.Feedback}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  feedback: {
    fontSize: 14,
    color: '#555',
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
