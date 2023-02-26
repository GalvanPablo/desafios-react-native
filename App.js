import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ActionButtons from './src/components/ActionButtons';
import AddItemModal from './src/components/AddItemModal';
import DeleteItemModal from './src/components/DeleteItemModal';
import ItemList from './src/components/ItemList';

export default function App() {

  const [itemList, setItemList] = useState([]);

  const clearList = () => {
    setItemList([]);
  };
  
  const addItem = (text, priority) => {
    setItemList((oldArry) => [...oldArry, { id: Date.now(), value: text, priority: priority }]);
    setAddModalVisible(false);
  };

  // MANEJO DEL MODAL AÑADIR
  const [addModalVisible, setAddModalVisible] = useState(false);

  const openAddModal = () => {
    setAddModalVisible(true);
  };

  const cancelAddModal = () => {
    setAddModalVisible(false);
  };

  // MANEJO DEL MODAL ELIMINAR
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setDeleteModalVisible(true);
  };

  const cancelDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const onDeleteModal = (id) => {
    setDeleteModalVisible(false);
    setItemList((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tareas</Text>
      {itemList.length === 0 ? <Text style={styles.info}>No hay tareas</Text> : <ItemList list={itemList} openModal={openDeleteModal}/>}
      <ActionButtons openAddModal={openAddModal} clearList={clearList}/>
      <AddItemModal modalVisible={addModalVisible} onCancelModal={cancelAddModal} addItem={addItem}/>
      <DeleteItemModal modalVisible={deleteModalVisible} selectedItem={selectedItem} onCancel={cancelDeleteModal} onDelete={onDeleteModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 20,
    color: '#ccc',
    textAlign: 'center',
  },
});
