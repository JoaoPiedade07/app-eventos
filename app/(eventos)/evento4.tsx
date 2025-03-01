import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Evento1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = { styles.text }>Hackathon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
  },
});