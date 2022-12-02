import React, { useState, useCallback } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import ImageUploader from './components/ImageUploader';
import EditModal from './components/EditModal';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visible, setVisible] = useState(false);

  const onGalleryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false
    };
    launchImageLibrary(options, setSelectedImage);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false
    };
    launchCamera(options, setSelectedImage);
  }, []);

  const uri = selectedImage?.assets && selectedImage.assets[0].uri;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text1}>Edit Profile</Text>
      <ImageUploader uri={uri} onPress={() => setVisible(true)}/>
      <EditModal 
        isVisible={visible}
        onClose={() => setVisible(false)}
        onGalleryPress={onGalleryPress}
        onCameraPress={onCameraPress}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    marginBottom: 30,
    color: 'red',
    fontFamily: 'Roboto'
  }
})

export default App;