import { Button, Modal as RNmodal, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Modal = ({modalVisible, selectedItem, onCancelModal, onDeleteModal}) => {
    return (
        <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.modalTitleText}>Eliminar item</Text>
                    </View>

                    <View style={styles.modalBody}>
                        <Text style={styles.modalBodyText}>¿Estás seguro de eliminar el item {selectedItem?.value}?</Text>
                    </View>
                    
                    <View style={styles.modalActions}>
                        <Button title="Cancelar" onPress={onCancelModal}/>
                        <Button title="Eliminar" onPress={()=>{
                            onDeleteModal(selectedItem?.id)
                        }}/>
                    </View>
                </View>
            </View>
        </RNmodal>
    )
}

export default Modal

const styles = StyleSheet.create({
    modal:{
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
})