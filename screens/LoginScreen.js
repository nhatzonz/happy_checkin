import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import ImgLogo from '../assets/logo2-removebg-preview.png';
import BackgroundWrapper from '../BackgroundWrapper/BackgroundWrapper';

export default function LoginScreen({ navigation }) {
    function handleLogin() {
        navigation.navigate('Home');
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

                <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#888" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />

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
