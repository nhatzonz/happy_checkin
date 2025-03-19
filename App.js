import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './screens/HomeScreen';
import SubmitScreen from './screens/SuccessScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();
const ONE_DAY = 24 * 60 * 60 * 1000;

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    async function checkLoginStatus() {
        const storedData = await AsyncStorage.getItem('user');
        if (!storedData) return setIsLoggedIn(false);

        const { loginTime } = JSON.parse(storedData);

        if (Date.now() - loginTime > ONE_DAY) {
            console.log('⏳ Hết hạn đăng nhập, yêu cầu đăng nhập lại...');
            await AsyncStorage.removeItem('user');
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }
    useEffect(() => {
        checkLoginStatus();
        const interval = setInterval(checkLoginStatus, ONE_DAY);
        return () => clearInterval(interval);
    }, []);
    if (isLoggedIn === null) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login">
                    {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
                <Stack.Screen name="Home">
                    {(props) => <HomeScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
                <Stack.Screen name="Success" component={SubmitScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
