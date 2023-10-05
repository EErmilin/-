import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Park = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{height: 999, width: '100%', backgroundColor: 'red'}}/>
                <View style={{height: 999, width: '100%', backgroundColor: 'green'}}/>
            </ScrollView>

        </View>
    )
}

export default Park

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})