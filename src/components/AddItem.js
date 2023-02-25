import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'

const AddItem = ({onChangeText, itemText, addItem}) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Escribe un item" value={itemText} onChangeText={onChangeText} />
            <Button style={styles.button} title="Añadir" onPress={addItem} />
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
    },
    button: {
        width: '20%',
    },
})