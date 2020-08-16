import { StyleSheet } from 'react-native'
import colors from '../../../colors'

const pageHeader = colors.pageHeader

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: pageHeader.backGround
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: pageHeader.title,
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40
    }
})

export default styles