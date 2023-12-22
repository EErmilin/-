import { ScrollView, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useMemo } from 'react'
import { colors } from '../../../assets/colors'
import { useStore } from '../../../App';
import { useNavigation } from '@react-navigation/native';

const Park = () => {
    const { state } = useStore();
    const navigation = useNavigation();
    const navigationState = navigation.getState();
    const onNavigation = (uuid: string) => {
        navigation.navigate('Details', { uuid: uuid })
    };

    //   <Image source={{ uri: item.image }} resizeMode="cover" />
    const templateExibits = useMemo(() => {
        console.log(state?.exhibits)
        if (state?.exhibits) {
            const array = state?.exhibits.filter((item) => item.name === 'Чум' || item.name === 'Лабаз' || item.name === 'Священный лабаз' || item.name === 'Печь глинобитная' || item.name === 'Жилые постройки')
            return array.map((item) => {
                const imgArray = item.images?.map(img =>
                    img.directus_files_id
                        ? `https://museum.mobility.tw1.ru/assets/${img.directus_files_id?.filename_disk}`
                        : null,
                );
                return <TouchableWithoutFeedback onPress={() => onNavigation(item.id)}>
                    <View>
                        <Image style={styles.img} source={{ uri: imgArray[0] }} resizeMode="cover" />
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            })
        }
    }, [state?.exhibits])

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Музейный этнографический парк «Земля предков»</Text>
                <View style={styles.wrp}>{templateExibits}</View>
            </ScrollView>

        </View>
    )
}

export default Park

const styles = StyleSheet.create({
    title: {
        paddingBottom: 15,
        fontSize: 24,
        lineHeight: 30,
        color: '#2B2B2B',
        width: '100%',
        textAlign: 'center',
        letterSpacing: 2,
        paddingTop: 0,
        fontFamily: 'OzHandicraftCyrillicBT',
    },
    wrp: {
        alignItems: 'center',
        gap: 24,
        paddingBottom: 50,
    },
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: colors.white,
      
    },
    name: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 20, /* 125% */
        letterSpacing: 0.8,
        marginTop: 14,
    },
    img: {
        width: 300,
        height: 121,
    }
})