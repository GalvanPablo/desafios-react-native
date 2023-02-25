import { Pressable, StyleSheet, Text } from 'react-native'

import React from 'react'

const Item = ({itemData, openModal}) => {
    return (
        <Pressable
        style={styles.itemContainer}
        onPress={() => 
            openModal(itemData.item)
        }>
            <Text>{itemData.item.value}</Text>
        </Pressable>
    )
}

export default Item

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    }
})