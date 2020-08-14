import { StyleSheet, Button } from 'react-native';
import colors from '../../../colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backGround,
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
        color: colors.title,
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
        backgroundColor: colors.buttonBackground,
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: colors.buttonPrimaryBackGround
    },

    buttonSecondary: {
        backgroundColor: colors.buttonSecondaryBackGround
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: colors.buttonText
    }



});

export default styles;