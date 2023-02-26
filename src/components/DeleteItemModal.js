import { Modal, StyleSheet, Text, View } from 'react-native'

import Button from './Button'
import React from 'react'

const DeleteModal = ({modalVisible, selectedItem, onCancel, onDelete}) => {
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.modalTitleText}>Eliminar item</Text>
                    </View>

                    <View style={styles.modalBody}>
                        <Text style={styles.modalBodyText}>¿Estás seguro de eliminar el item {selectedItem?.value}?</Text>
                    </View>
                    
                    <View style={styles.modalActions}>
                        <Button title="Cancelar" styleButton={styles.buttonCancel} onPress={onCancel}/>
                        <Button title="Eliminar" styleButton={styles.buttonDelete} onPress={()=>{
                            onDelete(selectedItem?.id)
                        }}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteModal

const styles = StyleSheet.create({
    modalBackground:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        width: '100%',
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    modalTitleText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalBody: {
        padding: 20,
    },
    modalBodyText: {
        textAlign: 'center',
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    buttonCancel:{
        backgroundColor: '#ccc',
    },
    buttonDelete:{
        backgroundColor: '#f00',
    },
})