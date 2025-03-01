import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from "@expo/vector-icons";

type LinkType = "/(eventos)/evento1" | "/(eventos)/evento2" | "/(eventos)/evento3" | "/(eventos)/evento4";

const dados: { id: string; nome: string; link: LinkType; participantes: string; date: string; }[] = [
    {id: '1', nome: 'Conferência de Programação', link: '/(eventos)/evento1', participantes: '499', date: '01/05/2025',},
    {id: '2', nome: 'Taste Wine', link: '/(eventos)/evento2', participantes: '100', date: '04/07/2026',},
    {id: '3', nome: 'Meetup', link: '/(eventos)/evento3', participantes: '230', date: '27/10/2026',},
    {id: '4', nome: 'Hackathon', link: '/(eventos)/evento4', participantes: '23', date: '01/12/2025',},
  ];

const ListPage = () => {
    return (
        <View style={ styles.container }>
        <FlatList
        nestedScrollEnabled={ true }
        data={ dados }
        keyExtractor={( item ) => item.id }
        renderItem = {({ item }) => (
          <View style={ styles.item }>
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
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
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
      color: 'blue',
      marginTop: 5,
    },
});

export default ListPage;