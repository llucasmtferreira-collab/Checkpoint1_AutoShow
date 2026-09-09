import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Cabecalho } from './components/Cabecalho';
import { CarroCard } from './components/CarroCard';

const carros = [
  {
    id: '1',
    nome: 'Honda Civic e:HEV',
    categoria: 'Sedã híbrido',
    ano: '2024',
    imagem: require('./assets/honda-civic.jpg'),
  },
  {
    id: '2',
    nome: 'Toyota Corolla LE',
    categoria: 'Sedã',
    ano: '2024',
    imagem: require('./assets/toyota-corolla.jpg'),
  },
  {
    id: '3',
    nome: 'Ford Mustang GT',
    categoria: 'Esportivo',
    ano: '2024',
    imagem: require('./assets/ford-mustang.jpg'),
  },
  {
    id: '4',
    nome: 'Porsche 911 Carrera',
    categoria: 'Esportivo',
    ano: '2024',
    imagem: require('./assets/porsche-911.jpg'),
  },
  {
    id: '5',
    nome: 'Jeep Compass',
    categoria: 'SUV',
    ano: '2025',
    imagem: require('./assets/jeep-compass.jpg'),
  },
  {
    id: '6',
    nome: 'Tesla Model 3',
    categoria: 'Elétrico',
    ano: '2024',
    imagem: require('./assets/tesla-model3.jpg'),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho
        titulo="AutoShow"
        subtitulo="Vitrine de carros reais"
      />

      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarroCard
            nome={item.nome}
            categoria={item.categoria}
            ano={item.ano}
            imagem={item.imagem}
          />
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10131a',
    paddingTop: 45,
  },
  lista: {
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
});
