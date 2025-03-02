import { ThemeProvider } from '@/components/ThemeContext';
import { Redirect } from 'expo-router';

const StartPage = () => {
    return (
        <ThemeProvider>
            <Redirect href = "/home" />;
        </ThemeProvider>
    )
    
};

export default StartPage;