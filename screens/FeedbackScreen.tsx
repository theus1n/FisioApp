import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

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
  return (
    <View style={styles.container}>
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
});
