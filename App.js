import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import AddItem from './src/components/AddItem';
import ItemList from './src/components/ItemList';
import Modal from './src/components/Modal';

export default function App() {

  const [itemText, setItemText] = useState('');
  const [itemList, setItemList] = useState([]);

  const onChangeText = (text) => {
    setItemText(text);
  };
  
  const addItem = (text) => {
    setItemList((oldArry) => [...oldArry, { id: Date.now(), value: itemText }]);
    setItemText('');
  };

  // MANEJO DEL MODAL
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const cancelModal = () => {
    setModalVisible(false);
  };

  const onDeleteModal = (id) => {
    setModalVisible(false);
    setItemList((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      <AddItem onChangeText={onChangeText} itemText={itemText} addItem={addItem} />
      <ItemList list={itemList} openModal={openModal}/>
      <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={cancelModal} onDeleteModal={onDeleteModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 30,
  }
});
