import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';

import { Card, CardContent } from '../components/ui/Card';

export default function AgendaScreen() {
  const navigation = useNavigation();

  const [selectedDay, setSelectedDay] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const appointments = [
    { date: new Date(2024, 1, 15), title: 'Consulta de Avaliação' },
    { date: new Date(2024, 1, 20), title: 'Sessão de Fisioterapia' },
  ];

  const onChange = (_event: DateTimePickerEvent, date?: Date) => {
    if (date) setSelectedDay(date);
    setShowPicker(false);
  };

  const formattedDate = format(selectedDay, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Voltar */}

      <TouchableOpacity style={styles.topButton} onPress={() => navigation.goBack()}>
        <Text style={styles.topButtonText}>Voltar</Text>
      </TouchableOpacity>
      <View style={{ height: 48 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Sua Agenda
      </Text>

      {/* Botão de data */}
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowPicker(true)}
      >
        <Text style={styles.dateButtonText}>Selecionar Data: {formattedDate}</Text>
      </TouchableOpacity>

      {/* Modal do picker */}
      {showPicker && (
        <DateTimePicker
          value={selectedDay}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={onChange}
          locale="pt-BR"
        />
      )}

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>
        Próximas Consultas
      </Text>

      <View style={styles.cardList}>
        {appointments.map((appointment, index) => (
          <Card key={index}>
            <CardContent>
              <Text style={styles.cardTitle}>{appointment.title}</Text>
              <Text style={styles.cardText}>
                {format(appointment.date, "dd 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
              </Text>
            </CardContent>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f7ff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  dateButton: {
    backgroundColor: '#7fb2ff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  dateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardList: {
    gap: 16,
    paddingBottom: 30,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
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
