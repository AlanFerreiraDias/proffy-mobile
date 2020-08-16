import { StyleSheet } from 'react-native'
import colors from '../../../colors'

const teacherList = colors.teacherList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: teacherList.backGround
    },
    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: teacherList.label,
        fontFamily: 'Poppins_400Regular'
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%'
    },

    input: {
        height: 54,
        backgroundColor: teacherList.input,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    submitButton: {
        backgroundColor: teacherList.submitButton,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: teacherList.submitButtonText,
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
})

export default styles