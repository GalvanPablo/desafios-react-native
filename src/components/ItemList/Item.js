import { Pressable, StyleSheet, Text } from 'react-native'

import React from 'react'

const Item = ({itemData, openModal}) => {
    const priority = itemData.item.priority === undefined ? 3 : itemData.item.priority
    const color = ['green', 'yellow', 'red', '#ccc']
    
    return (
        <Pressable
        style={[styles.itemContainer, {backgroundColor: color[priority]}]}
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