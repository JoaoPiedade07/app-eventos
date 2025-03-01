import { StyleSheet, View, Text } from 'react-native';
import React from 'react'

const profile = () => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.text }>Profile Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 16,
        
    },
})

export default profile;