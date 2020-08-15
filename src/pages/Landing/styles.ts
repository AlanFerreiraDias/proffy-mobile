import { StyleSheet, Button } from 'react-native';
import colors from '../../../colors'

const landing = colors.landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: landing.backGround,
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: landing.title,
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: landing.buttonBackground,
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: landing.buttonPrimaryBackGround
    },

    buttonSecondary: {
        backgroundColor: landing.buttonSecondaryBackGround
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: landing.buttonText
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: landing.totalConnections,
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    },

});

export default styles;