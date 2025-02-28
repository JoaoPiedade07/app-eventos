import { StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Calendar, DateData } from 'react-native-calendars';



const home = () => {

    const [open, setOpen] = useState(false); //Open and close the calendar

    function handleOpen() {
        setOpen(!open);
    }
    
    return (
        <View style = { styles.container}>
            <Text style = { styles.text }>Home Screen</Text>

            <TouchableOpacity style={styles.button} onPress={handleOpen}>
                <Text style={styles.buttonText}>Open Calendar</Text>
            </TouchableOpacity>

            <Modal
                animationType='slide'
                transparent={true}
                visible={open}>
                    <View style={styles.centerView}>
                    <View style={styles.modalView}>

                    <Calendar
                        onDayPress={(day: DateData) => console.log('Selected day:', day)}
                        markedDates={{ 
                        '25-02-2025': {selected: true, marked: true, selectedColor: 'blue'},
                        }}
                        />

                    <TouchableOpacity style={styles.button} onPress={handleOpen}>
                        <Text style={styles.buttonText}>Close Calendar</Text>
                    </TouchableOpacity>

                    </View>
                    </View>
                </Modal>
        </View>

        
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 16,
    },
    container: {
        flex: 1,  
        alignItems: 'center', 
    },
    item: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    calendarContainer: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 3,
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '35%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginTop: 10,
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
          color: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
    },
})

export default home;