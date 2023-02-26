import { Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Button = ({styleButton, onPress, title}) => {
    return (
        <Pressable
        style={[styles.button, styleButton]}
        onPress={onPress}>
            <Text>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ccc',
    },
})