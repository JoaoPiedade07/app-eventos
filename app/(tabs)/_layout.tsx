import { Tabs } from 'expo-router';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name = "list" options= {{ headerShown: false}} />
            <Tabs.Screen name = "home" options= {{ headerShown: false}} />
            <Tabs.Screen name = "profile" options= {{ headerShown: false}} />
        </Tabs>
    )
}