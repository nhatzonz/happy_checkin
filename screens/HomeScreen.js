import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import ImgLogo from '../assets/logo2-removebg-preview.png';
import { useState } from 'react';

import BackgroundWrapper from '../BackgroundWrapper/BackgroundWrapper';

export default function HomeScreen({ navigation }) {
    const [phone, setPhone] = useState('');

    function handlePress(num) {
        if (phone.length < 10) {
            setPhone(phone + num);
        }
    }

    function handleDelete() {
        setPhone(phone.slice(0, -1));
    }

    function handleSubmit() {
        if (phone.length < 10) alert('số điện thoại chưa đủ 10 ký tự');
        else navigation.navigate('SignUp');
    }

    return (
        <BackgroundWrapper>
            <View style={styles.logo}>
                <Image source={ImgLogo} style={styles.logoImage} />
                <Text style={styles.titleLogo}>HappyCheckin</Text>
            </View>
            <Text style={styles.desLogo}>Vui lòng nhập số điện thoại của bạn để checkin ...</Text>
            <TextInput style={styles.input} value={phone} />
            <View style={styles.keyboard}>
                {[
                    ['1', '2', '3'],
                    ['4', '5', '6'],
                    ['7', '8', '9'],
                    ['⌫', '0', '✔'],
                ].map((row, index) => {
                    return (
                        <View key={index} style={styles.row}>
                            {row.map((num) => (
                                <TouchableOpacity
                                    key={num}
                                    style={styles.buttonNum}
                                    onPress={() => {
                                        if (num === '⌫') handleDelete();
                                        else if (num === '✔') handleSubmit();
                                        else handlePress(num);
                                    }}
                                >
                                    <Text style={styles.titleNum}>{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    );
                })}
            </View>
        </BackgroundWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    title: {
        color: 'red',
        borderColor: 'blue',
        borderWidth: 1,
        fontSize: 20,
        padding: 10,
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
    input: {
        minWidth: '40%',
        height: 60,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        fontSize: 30,
        color: '#f2fafd',
        textAlign: 'center',
        alignItems: 'center',
        letterSpacing: 2,
    },
    keyboard: {
        marginTop: 40,
        alignItems: 'center',
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        width: '50%',
        justifyContent: 'space-around',
    },
    buttonNum: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#f2fafd',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    titleNum: {
        color: '#f2fafd',
        fontSize: 20,
    },
});
