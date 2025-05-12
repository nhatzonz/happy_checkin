import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import ImgLogo from '../assets/logo2-removebg-preview.png';
import BackgroundWrapper from '../BackgroundWrapper/BackgroundWrapper';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/config';

export default function SignUpScreen({ navigation, route }) {
    const [text, setText] = useState('');
    const { phone } = route.params;

    async function handleFinish() {
        if (text.trim() === '') {
            alert('Tên không được để trống!');
            return;
        }
        try {
            await axios.post(`${API_URL}/customers/create`, {
                phone,
                name: text,
            });
            navigation.navigate('Success', { phone });
        } catch (err) {
            console.log('Lỗi kết nối server!', err);
        }
    }

    return (
        <BackgroundWrapper>
            <View style={styles.logo}>
                <Image source={ImgLogo} style={styles.logoImage} />
                <Text style={styles.titleLogo}>HappyCheckin</Text>
            </View>
            <Text style={styles.desLogo}>Vui lòng nhập tên hoặc biệt danh của bạn ...</Text>

            <View style={styles.wrapperInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tên của bạn ..."
                    value={text}
                    onChangeText={setText}
                    keyboardType="default"
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleFinish()}>
                <Text style={styles.buttonText}>Hoàn thành</Text>
            </TouchableOpacity>
        </BackgroundWrapper>
    );
}
const styles = StyleSheet.create({
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
        color: '#f2fafd',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desLogo: {
        fontSize: 14,
        color: '#d6dee2',
        width: '100%',
        textAlign: 'center',
        marginTop: -10,
    },
    wrapperInput: {
        width: '40%',
        marginTop: 40,
        marginBottom: 40,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2fafd',
        color: '#f2fafd',
        fontSize: 20,
        padding: 10,
        letterSpacing: 2,
    },
    button: {
        backgroundColor: '#30a1fb',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
