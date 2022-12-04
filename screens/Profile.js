import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { requestCameraPermissions, requestStoragePermissions } from '../components/Permissions';
import ImageUploader from '../components/ImageUploader';
import EditModal from '../components/EditModal';
import TextField from '../components/TextField';
import { horizontalScale, normalScale, verticalScale } from '../components/Responsive';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const onGalleryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false
    };
    setModalVisible(false);
    requestStoragePermissions();
    setTimeout(() => launchImageLibrary(options, setSelectedImage), 100);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    setModalVisible(false);
    requestCameraPermissions();
    requestStoragePermissions();
    setTimeout(() => launchCamera(options, setSelectedImage), 100);
  }, []);

  const uri = selectedImage?.assets && selectedImage.assets[0].uri;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text1}>My Profile</Text>
      <ImageUploader uri={uri} onPress={() => setModalVisible(true)}/>
      <EditModal 
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
          onGalleryPress={onGalleryPress}
          onCameraPress={onCameraPress}/>
      <TextField />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 0,
    padding: normalScale(50),
    backgroundColor: '#fafafa',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    marginBottom: verticalScale(30),
    color: 'black',
    fontSize: normalScale(28)
  }
})

export default Profile;