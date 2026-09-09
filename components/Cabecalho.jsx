import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Cabecalho({ titulo, subtitulo }) {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    paddingHorizontal: 18,
    paddingBottom: 18,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#a9b0bd',
    fontSize: 16,
    marginTop: 4,
  },
});
