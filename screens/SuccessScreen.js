import { StyleSheet, Text, View } from 'react-native';
import { Svg, Circle, Path } from 'react-native-svg';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { API_URL } from '../config/config';

import BackgroundWrapper from '../BackgroundWrapper/BackgroundWrapper';

export default function SuccessScreen({ route, navigation }) {
    const { phone } = route.params;
    const [customer, setCustomer] = useState(null);
    const [point, setPoint] = useState(0);

    useEffect(() => {
        async function handleCheckin() {
            try {
                await axios.post(`${API_URL}/customers/checkin`, { phone });

                const { data } = await axios.get(`${API_URL}/customers/${phone}`);
                console.log('xxxx', data);

                setCustomer(data?.customer?.name);
                setPoint(data?.customer?.point);
            } catch (error) {
                console.error(' Lỗi check-in:', error.response?.data?.message || error.message);
            }
        }
        console.log('yyyy:', customer);

        handleCheckin();

        const timeout = setTimeout(() => {
            navigation.replace('Home');
        }, 6000);

        return () => {
            clearTimeout(timeout);
        };
    }, [phone]);

    return (
        <BackgroundWrapper>
            <View style={styles.iconContainer}>
                <Svg height="80" width="80" viewBox="0 0 48 48">
                    <Circle cx="24" cy="24" r="22" fill="#31c331" />
                    <Path
                        d="M14 24l6 6 14-14"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </Svg>
            </View>

            <Text style={styles.thankText}>Thank you!</Text>
            <Text style={styles.name}>{customer}</Text>
            <Text style={styles.checkinText}>Bạn đã checkin thành công!</Text>

            <View style={styles.line} />

            <Text style={styles.currentPoint}>Điểm hiện của bạn là</Text>
            <Text style={styles.points}>{point} Pts</Text>
        </BackgroundWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1D24',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        marginBottom: 20,
    },
    thankText: {
        color: '#d6dee2',
        fontSize: 18,
        marginBottom: 5,
    },
    name: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    checkinText: {
        color: '#d6dee2',
        fontSize: 18,
        marginTop: 5,
    },
    line: {
        width: '60%',
        height: 1,
        backgroundColor: '#d6dee2',
        marginVertical: 15,
    },
    currentPoint: {
        color: '#d6dee2',
        fontSize: 18,
    },
    points: {
        color: '#31c331',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 5,
    },
});
