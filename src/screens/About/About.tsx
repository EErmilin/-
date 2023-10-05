import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{height: 999, width: '100%', backgroundColor: 'blue'}}/>
                <View style={{height: 999, width: '100%', backgroundColor: 'green'}}/>
            </ScrollView>

        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})