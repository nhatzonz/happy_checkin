import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import ImgLogo from '../assets/logo2-removebg-preview.png';
import BackgroundWrapper from '../BackgroundWrapper/BackgroundWrapper';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_URL } from '../config/config';

export default function LoginScreen({ navigation, setIsLoggedIn }) {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [error, setError] = useState('');

    async function handleLogin() {
        setError('');
        try {
            const { data } = await axios.post(`${API_URL}/api/users/login`, {
                userName,
                passWord,
            });
            // console.log(' Token nhận được:', data);
            const loginData = {
                user: data.user,
                loginTime: Date.now(),
            };
            await AsyncStorage.setItem('user', JSON.stringify(loginData));
            navigation.navigate('Home');
            console.log('📦 Lưu user vào AsyncStorage thành công!');
            setIsLoggedIn(true);
        } catch (err) {
            setError(err.response?.data?.message || 'Lỗi kết nối đến server!');
        }
    }
    return (
        <BackgroundWrapper>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={ImgLogo} style={styles.logoImage} />
                    <Text style={styles.titleLogo}>HappyCheckin</Text>
                </View>

                <View style={styles.accountInfo}>
                    <Text style={styles.username}>Ichi</Text>
                    <Text style={styles.website}>happy-shopper.com</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#888"
                    value={userName}
                    onChangeText={setUserName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry
                    value={passWord}
                    onChangeText={setPassWord}
                />

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </BackgroundWrapper>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        width: '40%',
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginLeft: -20,
    },
    logoImage: {
        width: 140,
        height: 140,
        resizeMode: 'cover',
        marginRight: -16,
    },
    titleLogo: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    accountInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    username: {
        fontSize: 14,
        color: '#333',
    },
    website: {
        fontSize: 14,
        color: '#007bff',
    },
    input: {
        width: '100%',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 15,
        fontSize: 18,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
