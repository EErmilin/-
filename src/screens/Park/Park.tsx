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

    const templateExibits = useMemo(() => {
        console.log(state?.exhibits)
        if (state?.exhibits) {
            let exhibitsArray = []
                exhibitsArray.push(state?.exhibits.find((item) => item.id === "cb593c21-e470-45ee-8bdb-76b5cdb6be30"))
                exhibitsArray.push(state?.exhibits.find((item) => item.id === "31a81a0e-b70a-4ccb-b98e-7dfac23303f2"))
                exhibitsArray.push(state?.exhibits.find((item) => item.id === "ab6a2503-3199-4c38-9abf-4bbe32853d8d"))
                exhibitsArray.push(state?.exhibits.find((item) => item.id === "cd6d5819-d176-40a4-94a5-08d9b7d77588"))
                exhibitsArray.push(state?.exhibits.find((item) => item.id === "4dae431e-c8a4-4920-93c7-88f8b05b6b77"))
            return exhibitsArray.map((item) => {
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
        fontFamily: 'OzHandicraftCyrillicBT',
        fontSize: 24,
        fontStyle: 'normal',
        lineHeight: 30, /* 125% */
        letterSpacing: 2,
        marginTop: 14,
    },
    img: {
        width: 300,
        height: 121,
    }
})