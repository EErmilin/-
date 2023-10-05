import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../../assets/colors';

interface IButton {
    text: string;
    onPress: () => void;
}

const Button: FC<IButton> = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 11,
        backgroundColor: colors.blue,
        borderRadius: 4
    },
    text: {
        fontSize: 18,
        color: colors.green_yellow
    }
})