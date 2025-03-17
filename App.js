import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SubmitScreen from './screens/SuccessScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Success" component={SubmitScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="LogIn" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
