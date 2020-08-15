import { StyleSheet } from 'react-native'

import colors from '../../../colors'

const teacherItem = colors.TeacherItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: teacherItem.background,
        borderWidth: 1,
        borderColor: teacherItem.border,
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden'
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: teacherItem.avatarBackground
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: teacherItem.name,
        fontSize: 20
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: teacherItem.subject,
        fontSize: 12,
        marginTop: 4
    },

    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: teacherItem.bio
    },

    footer: {
        backgroundColor: teacherItem.footer,
        padding: 24,
        alignItems: 'center',
        marginTop: 24
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: teacherItem.price,
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: teacherItem.priceValue,
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },


    favoriteButton: {
        backgroundColor: teacherItem.favoriteButton,
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    contactButton: {
        backgroundColor: teacherItem.contactButton,
        flex: 1,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    contactButtonText: {
        color: teacherItem.contactButtonText,
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16

    }

})

export default styles;