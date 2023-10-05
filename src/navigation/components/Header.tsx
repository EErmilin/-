import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const Header = () => {
    return (
        <View style={styles.container}>
            <Text>Header</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    drawer: {},
    title: {},
    backButton: {

    },
})