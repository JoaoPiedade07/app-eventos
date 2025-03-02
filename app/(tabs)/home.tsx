import { StyleSheet, View, Text, TouchableOpacity, Modal, Animated, Pressable } from 'react-native';
import React, { useState, useRef } from 'react';
import { Calendar, DateData } from 'react-native-calendars';
import { useTheme } from '@/components/ThemeContext';

const Home = () => {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false); 
    const switchAnim = useRef(new Animated.Value(theme === 'dark' ? 1 : 0)).current;

    function handleOpen() {
        setOpen(!open);
    }

    function handleToggleTheme() {
        Animated.timing(switchAnim, {
            toValue: theme === 'dark' ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
        toggleTheme();
    }

    return (
        <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
            <Text style={[styles.text, theme === 'dark' ? styles.textLight : styles.textDark]}>Home Screen</Text>

            {/* Botão de abrir o calendário */}
            <TouchableOpacity style={[styles.button, theme === 'dark' ? styles.buttonDark : styles.buttonLight]} onPress={handleOpen}>
                <Text style={[styles.buttonText, theme === 'dark' ? styles.textLight : styles.textButtonLight]}>Abrir Calendário</Text>
            </TouchableOpacity>

            {/* Switch personalizado abaixo do botão */}
            <View style={styles.themeSwitcher}>
                <Pressable onPress={handleToggleTheme}>
                    <View style={[styles.switchContainer, theme === 'dark' ? styles.switchDark : styles.switchLight]}>
                        <Animated.View 
                            style={[
                                styles.switchCircle,
                                {
                                    left: switchAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [4, 26], // Move o círculo entre essas posições
                                    }),
                                    backgroundColor: theme === 'dark' ? '#fff' : '#007bff',
                                }
                            ]}
                        />
                    </View>
                </Pressable>
            </View>

            {/* Modal do calendário */}
            <Modal animationType='slide' transparent={true} visible={open}>
                <View style={styles.centerView}>
                    <View style={[styles.modalView, theme === 'dark' ? styles.dark : styles.light]}>
                        <Calendar
                            onDayPress={(day: DateData) => console.log('Selected day:', day)}
                            markedDates={{
                                '2025-02-25': { selected: true, marked: true, selectedColor: 'blue' },
                            }}
                            theme={{
                                backgroundColor: theme === 'dark' ? '#222' : '#fff',
                                calendarBackground: theme === 'dark' ? '#333' : '#fff',
                                dayTextColor: theme === 'dark' ? '#fff' : '#000',
                                textDisabledColor: theme === 'dark' ? '#555' : '#d9e1e8',
                                monthTextColor: theme === 'dark' ? '#fff' : '#000',
                            }}
                        />

                        <TouchableOpacity style={[styles.button, theme === 'dark' ? styles.buttonDark : styles.buttonLight]} onPress={handleOpen}>
                            <Text style={[styles.buttonText, theme === 'dark' ? styles.textLight : styles.textButtonLight]}>Fechar Calendário</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    light: {
        backgroundColor: '#fff',
    },
    dark: {
        backgroundColor: '#222',
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
    },
    textLight: {
        color: '#fff',
    },
    textDark: {
        color: '#000',
    },
    textButtonLight: {
        color: '#fff', // Garantindo que o texto do botão fique branco no modo claro
    },
    button: {
        marginTop: 10,
        height: 50,
        width: 200,
        borderRadius: 8,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLight: {
        backgroundColor: '#007bff',
    },
    buttonDark: {
        backgroundColor: '#444',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        width: '80%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    themeSwitcher: {
        marginTop: 20, // Espaçamento abaixo do botão
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    switchContainer: {
        width: 50,
        height: 28,
        borderRadius: 20,
        justifyContent: 'center',
        padding: 2,
    },
    switchLight: {
        backgroundColor: '#ccc',
    },
    switchDark: {
        backgroundColor: '#555',
    },
    switchCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        position: 'absolute',
    },
});

export default Home;
