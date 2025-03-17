import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Svg, Circle, Path } from 'react-native-svg';

import BackgroundWrapper from '../BackgroundWrapper/BackgroundWrapper';

export default function SuccessScreen({ route }) {
    const { name } = route.params;
    console.log(name);

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

            {/* Text */}
            <Text style={styles.thankText}>Thank you!</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.checkinText}>Bạn đã checkin thành công!</Text>

            {/* Line */}
            <View style={styles.line} />

            {/* Point Display */}
            <Text style={styles.currentPoint}>Điểm hiện của bạn là</Text>
            <Text style={styles.points}>0 Pts</Text>
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
