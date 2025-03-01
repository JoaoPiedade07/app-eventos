import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '@/components/TabBar';
import { Ionicons } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs tabBar = { props => <TabBar {...props} /> }>
            <Tabs.Screen name = "list" options= {{ headerShown: false, tabBarIcon: ({ color, size }) => ( 
                <Ionicons name = "list-outline" size = {size} color = {color} /> ),
                }} />
            <Tabs.Screen name = "home" options= {{ headerShown: false, tabBarIcon: ({ color, size }) => ( 
                <Ionicons name = "home-outline" size = {size} color = {color} /> ),
                }} />
            <Tabs.Screen name = "profile" options= {{ headerShown: false, tabBarIcon: ({ color, size }) => ( 
                <Ionicons name = "person-outline" size = {size} color = {color} /> ),
                }} />
        </Tabs>
    );
};