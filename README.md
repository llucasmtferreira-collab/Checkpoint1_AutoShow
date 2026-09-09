# Checkpoint 1 - AutoShow

Aplicativo React Native desenvolvido para o Checkpoint 1 de Cross-Platform Application Development.

## Tema
Vitrine de carros reais.

## Componentes utilizados
- View
- Text
- Image
- StyleSheet
- FlatList
- Componentes próprios: Cabecalho e CarroCard

## Antes de executar
Você precisa colocar 6 fotos na pasta `assets`.

Salve as imagens exatamente com estes nomes:
- `honda-civic.jpg`
- `toyota-corolla.jpg`
- `ford-mustang.jpg`
- `porsche-911.jpg`
- `jeep-compass.jpg`
- `tesla-model3.jpg`

Dentro da pasta `assets` existe o arquivo `COLOQUE_AS_FOTOS_AQUI.txt` com a lista completa.

## Carros da vitrine
- Honda Civic e:HEV (2024)
- Toyota Corolla LE (2024)
- Ford Mustang GT (2024)
- Porsche 911 Carrera (2024)
- Jeep Compass (2025)
- Tesla Model 3 (2024)

## Como executar
1. Abra a pasta do projeto no VS Code.
2. Coloque as 6 fotos na pasta `assets`.
3. Abra o terminal.
4. Execute `npm install`.
5. Depois execute `npx expo start`.
6. Pressione `a` para Android ou `w` para web.

## Estrutura
- `App.js`: array com os dados dos carros e a FlatList.
- `components/Cabecalho.jsx`: componente do cabeçalho.
- `components/CarroCard.jsx`: componente reutilizável de cada carro.
- `assets`: pasta onde ficam as imagens locais.
