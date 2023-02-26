import { Keyboard, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import Button from './Button'

const AddModal = ({ modalVisible, onCancelModal, addItem }) => {
    const [itemText, setItemText] = useState('');
    const onChangeText = (text) => {
        setItemText(text);
    };

    const [priority, setPriority] = useState(0);
    const color = ['green', 'yellow', 'red', '#ccc']
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Nueva Tarea</Text>
                    <TextInput style={styles.input} placeholder="Nombre" value={itemText} onChangeText={onChangeText} />

                    <View style={styles.prioridadesContainer}>
                        <Text style={{color: color[priority]}}>Prioridad</Text>
                        <View style={styles.prioridades}>
                            <Button styleButton={[styles.btnPrioridades, styles.btnBaja]} title="Baja"  onPress={()=>setPriority(0)}/>
                            <Button styleButton={[styles.btnPrioridades, styles.btnMedia]} title="Media"  onPress={()=>setPriority(1)}/>
                            <Button styleButton={[styles.btnPrioridades, styles.btnAlta]} title="Alta"  onPress={()=>setPriority(2)}/>
                        </View>
                    </View>

                    <View style={styles.modalActions}>
                        <Button styleButton={styles.btnCancel} title="Cancelar" onPress={onCancelModal} />
                        <Button styleButton={styles.btnAdd} title="Añadir" onPress={() => {
                            if(itemText.trim() === ''){
                                alert('El nombre de la tarea no puede estar vacío')
                                return;
                            }
                            Keyboard.dismiss();
                            addItem(itemText, priority);
                            setItemText('');
                            setPriority(0);
                        }} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AddModal

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
        gap: 10,
    },
    modalTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
    },


    input: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5,
    },

    prioridadesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: 5,
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 2,
    },
    prioridades: {
        flexDirection: 'row',
        gap: 5,
        width: '100%',
    },
    btnPrioridades: {
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    btnBaja: {
        backgroundColor: '#0f0',
    },
    btnMedia: {
        backgroundColor: '#ff0',
    },
    btnAlta: {
        backgroundColor: '#f00',
    },

    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    btnCancel:{
        backgroundColor: '#ccc',
    },
    btnAdd:{
        backgroundColor: '#888',
    },
})