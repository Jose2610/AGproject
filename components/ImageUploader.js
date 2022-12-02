import {
    useState,
    useEffect
} from 'react';
import {
    Image,
    View,
    Platform,
    Pressable,
    TouchableOpacity,
    Text,
    StyleSheet,
    ImagePickerIOS
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import defaultPic from '../assets/agpic.jpeg';

export default function ImageUploader({ uri, onPress }) {
    return (
        <View style={imageStyles.container}>
            <View style={imageStyles.borderPic} />
            <Image style={imageStyles.profilePic} source={uri ? {uri} : defaultPic} />

            <View style={imageStyles.uploadButtonContainer}>
                <TouchableOpacity onPress={onPress} style={imageStyles.uploadButton}>
                    <Icon name="edit" size={25} color='blue' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const imageStyles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadButtonContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        borderRadius: 999,
        padding: 7,
    },
    uploadButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 999,
    },
    borderPic: {
        position: 'absolute',
        borderRadius: 999,
        borderColor: 'red',
        borderWidth: 4,
        width: 150,
        height: 150,
        padding: 83
    }
})