import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Modal, Text } from 'react-native';

const ImagesModal = ({images}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleImagePress(image)}
        >
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
        </TouchableOpacity>
      ))}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Image
            source={{ uri: selectedImage }}
            style={styles.selectedImage}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ImagesModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  selectedImage: {
    width: 300,
    height: 300,
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});