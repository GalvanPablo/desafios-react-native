import { Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const NewItem = ({openAddModal, clearList}) => {
    return (
        <View style={styles.container}>
            <Pressable style={[styles.buttons, styles.btnClear]} onPress={() => clearList()}>
                <Text style={[styles.buttonsText]}>X</Text>
            </Pressable>
            <Pressable style={[styles.buttons, styles.btnAdd]} onPress={() => openAddModal()}>
                <Text style={[styles.buttonsText, {fontSize: 30}]}>+</Text>
            </Pressable>
        </View>
    )
}

export default NewItem

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 20,
        right: 20,
        gap: 5,
    },
    buttons: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    buttonsText: {
        alignSelf: 'center',
    },
    btnClear: {
        width: 30,
        height: 30,
        backgroundColor: '#ccc',
    },
    btnAdd: {
        backgroundColor: '#ccc',
    },
})