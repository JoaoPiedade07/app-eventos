import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from "@expo/vector-icons";

type LinkType = "/(eventos)/evento1" | "/(eventos)/evento2" | "/(eventos)/evento3" | "/(eventos)/evento4";

const imagens = {
  evento1: require('@/assets/images/eventos/event1.png'),
  evento2: require('@/assets/images/eventos/event1.png'),
  evento3: require('@/assets/images/eventos/event1.png'),
  evento4: require('@/assets/images/eventos/event1.png'),
};

const dados: { id: string; nome: string; link: LinkType; participantes: string; date: string; images: any;}[] = [
    {id: '1', nome: 'Conferência de Programação', link: '/(eventos)/evento1', 
      participantes: '499', date: '01/05/2025', images: imagens.evento1,},
    {id: '2', nome: 'Taste Wine', link: '/(eventos)/evento2', 
      participantes: '100', date: '04/07/2026', images: imagens.evento2,},
    {id: '3', nome: 'Meetup', link: '/(eventos)/evento3', 
      participantes: '230', date: '27/10/2026', images: imagens.evento3,},
    {id: '4', nome: 'Hackathon', link: '/(eventos)/evento4', 
      participantes: '23', date: '01/12/2025', images: imagens.evento4,},
  ];

const ListPage = () => {
    return (
        <View style={ styles.container }>
        <FlatList
        nestedScrollEnabled={ true }
        data={ dados }
        keyExtractor={( item ) => item.id }
        contentContainerStyle={{ paddingBottom: 70 }}
        renderItem = {({ item }) => (
          <View style={ styles.item }>
            <Image source={ item.images } style={ styles.image } />
            <View style={ styles.row }>
                <Text style={styles.text}>{item.nome}</Text>
                <Text style={styles.text}>{item.participantes} <Feather name = 'user' size = { 16 }/></Text>
              </View>
            <View style = { styles.row }>
              <Link href = { item.link } style={ styles.link }>Ver detalhes</Link>
              <Text style={styles.text}>{item.date} <Feather name = 'calendar' size = { 16 }/></Text>
            </View>
          </View>
        )}
        />
      </View>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginTop: 8,
    },
    item: {
        padding: 30,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#ddd',
        borderRadius: 30,
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',  // Deixa os elementos lado a lado
        justifyContent: 'space-between', // Um à esquerda e outro à direita
        alignItems: 'center', // Alinha verticalmente
    },
    link: {
      color: '#007bff',
      marginTop: 5,
    },
    image: {
      width: '100%', // Ocupa toda a largura do card
      height: 150,   // Altura fixa para manter o tamanho uniforme
      borderRadius: 15, // Borda arredondada para um visual mais bonito
      marginBottom: 10, // Espaço entre a imagem e o texto
      resizeMode: 'cover', // Ajusta a imagem dentro do espaço sem deformar
    },
});

export default ListPage;