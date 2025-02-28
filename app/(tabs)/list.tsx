import { StyleSheet, View, Text, FlatList } from 'react-native';

const dados = [
    {id: '1', nome: 'Conferência de Programação'},
    {id: '2', nome: 'Taste Wine'},
    {id: '3', nome: 'Meetup'},
    {id: '4', nome: 'Hackathon'},
  ];

const ListPage = () => {
    return (
        <View style={styles.container}>
        <FlatList
        nestedScrollEnabled={true}
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem = {({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.nome}</Text>
          </View>
        )}
        />
      </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginTop: 8,
    },
      item: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
});

export default ListPage;