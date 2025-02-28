import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';

export function TabBar ({ state, descriptors, navigation} : BottomTabBarProps ) {
    return (
        <View style = { styles.tabbar }>
            {state.routes.map(( route, index ) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name, route.params);
                }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key = { route.name }
                        accessibilityRole = 'button'
                        accessibilityState = { isFocused ? { selected: true } : {}}
                        accessibilityLabel = { options.tabBarAccessibilityLabel}
                        onPress = { onPress }
                        onLongPress= { onLongPress }
                        style = {styles.tabbarItem} >

                        <Feather name = 'home' size = { 24 } color = { '#222' }/>
                        
                        <Text style = {{ color: isFocused ? '#673ab7' : '#222' }}>
                            {typeof label === 'string' ? label : label({ focused: isFocused, color: isFocused ? '#673ab7' : '#222', position: 'below-icon', children: '' })}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 10, // Ajustado para alinhar melhor
        left: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'space-around', // Para distribuir os itens igualmente
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, 
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5, 
    },
})