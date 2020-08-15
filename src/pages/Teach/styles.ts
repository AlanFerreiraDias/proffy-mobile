import { StyleSheet, Button } from 'react-native';
import colors from '../../../colors'

const teach = colors.teach

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: teach.backGround,
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: teach.title,
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,

    },

    description: {
        marginTop: 24,
        color: teach.description,
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    okButtonText: {
        color: teach.okButtonText,
        fontFamily: 'Archivo_700Bold',
        fontSize: 16
    }


});

export default styles;