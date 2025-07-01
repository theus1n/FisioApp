import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
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
});
