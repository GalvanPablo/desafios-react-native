import { FlatList, StyleSheet } from 'react-native'

import Item from './Item'
import React from 'react'

const index = ({list, openModal}) => {
    return (
        <FlatList data={list} 
        renderItem={(itemData) => 
            <Item itemData={itemData} openModal={openModal}/>
        }
        keyExtractor={(item) => item.id.toString()} />
    )
}

export default index

const styles = StyleSheet.create({
    itemListContainer: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    }
})