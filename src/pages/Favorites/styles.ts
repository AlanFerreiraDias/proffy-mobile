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
    }
})

export default styles