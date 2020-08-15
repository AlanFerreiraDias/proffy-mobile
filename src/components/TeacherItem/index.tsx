import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/12505549?s=460&u=4cd2e26d104ff67f00ca014a618059335cc494c8&v=4' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Alan Dias</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>


            <Text style={styles.bio}>
                Amante de tecnologia. {'\n'}
                Vemkvem. {'\n'}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}> R$ 20,00 </Text>
                </Text>

                <View style={styles.buttonsContainer}>

                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato.
                        </Text>
                    </RectButton>

                </View>
            </View>

        </View>
    )
}

export default TeacherItem;