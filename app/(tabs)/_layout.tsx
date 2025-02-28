import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '@/components/TabBar';

export default () => {
    return (
        <Tabs tabBar = { props => <TabBar {...props} /> }>
            <Tabs.Screen name = "list" options= {{ headerShown: false}} />
            <Tabs.Screen name = "home" options= {{ headerShown: false}} />
            <Tabs.Screen name = "profile" options= {{ headerShown: false}} />
        </Tabs>
    )
}