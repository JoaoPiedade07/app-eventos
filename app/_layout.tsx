import { Stack } from 'expo-router';
import { ThemeProvider } from '@/components/ThemeContext';


const StackLayout = () => {
    return (
        <ThemeProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options= {{ headerShown: false}} />
            </Stack>
        </ThemeProvider>
    )
}

export default StackLayout;