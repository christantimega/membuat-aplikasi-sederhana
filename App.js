import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { key: '1', name: 'NASI GORENG', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd4fLUT-AiWqBPFLm55vm3h2Hn7GiWKIm9g&s' },
    { key: '2', name: 'NASI JAGUNG', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd4fLUT-AiWqBPFLm55vm3h2Hn7GiWKIm9g&s' },
    { key: '3', name: 'NASI LIWET', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd4fLUT-AiWqBPFLm55vm3h2Hn7GiWKIm9g&s' },
    { key: '4', name: 'NASI KUAH', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd4fLUT-AiWqBPFLm55vm3h2Hn7GiWKIm9g&s' },
    { key: '5', name: 'NASI BAKAR', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd4fLUT-AiWqBPFLm55vm3h2Hn7GiWKIm9g&s' },
    { key: '6', name: 'NASI JUARA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd4fLUT-AiWqBPFLm55vm3h2Hn7GiWKIm9g&s' },
    { key: '7', name: 'NASI NASI NASIAN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd4fLUT-AiWqBPFLm55vm3h2Hn7GiWKIm9g&s' },
    { key: '8', name: 'NASI GA LAKU', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd4fLUT-AiWqBPFLm55vm3h2Hn7GiWKIm9g&s' },
    { key: '9', name: 'NASI MU APA NASI KU!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd4fLUT-AiWqBPFLm55vm3h2Hn7GiWKIm9g&s' },
  ]);

  const addItem = () => {
    if (text) {
      setItems([...items, { key: Math.random().toString(), name: text, image: 'https://example.com/default-nasi.jpg' }]);
      setText('');
    }
  };

  const removeItem = (key) => {
    setItems(items.filter(item => item.key !== key));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DAFTAR MENU RESTO NASI BASI</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Masukkan nama hidangan"
          value={text}
          onChangeText={setText}
        />
        <Button title="Tambahkan Item" onPress={addItem} color="#841584" />
      </View>
      <Image
        style={styles.logoImage}
        source={{ uri: 'https://png.pngtree.com/png-clipart/20220604/original/pngtree-restaurant-logo-png-image_7932128.png' }}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.itemImage} source={{ uri: item.image }} />
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => Alert.alert(
                "Hapus Item",
                `Apakah Anda yakin ingin menghapus ${item.name}?`,
                [
                  { text: "Tidak" },
                  { text: "Ya", onPress: () => removeItem(item.key) }
                ]
              )}
            >
              <Text style={styles.deleteButtonText}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ea',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  logoImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#ff5252',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default App;
