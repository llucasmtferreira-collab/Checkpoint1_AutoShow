import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function CarroCard({ nome, categoria, ano, imagem }) {
  return (
    <View style={styles.card}>
      <Image
        source={imagem}
        style={styles.imagem}
        resizeMode="cover"
      />

      <View style={styles.conteudo}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.detalhes}>{categoria}</Text>
        <Text style={styles.ano}>Modelo {ano}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1b202b',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 18,
  },
  imagem: {
    width: '100%',
    height: 190,
  },
  conteudo: {
    padding: 16,
  },
  nome: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  detalhes: {
    color: '#a9b0bd',
    fontSize: 15,
    marginTop: 5,
  },
  ano: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
