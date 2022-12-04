import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { horizontalScale, normalScale, verticalScale } from './Responsive';

export default function ImagePicker({ isVisible, onClose, onGalleryPress, onCameraPress }) {
    return (
        <Modal
            isVisible={isVisible}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}
            animationIn='slideInUp'
            backdropColor='transparent'
            style={styles.modalStyle}
        >
            <SafeAreaView style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonOptions} onPress={onGalleryPress}>
                    <Icon name='photo-library' size={normalScale(65)} color='black' />
                    <Text style={styles.buttonText}>Gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOptions} onPress={onCameraPress}>
                    <Icon name='photo-camera' size={normalScale(65)} color='black' />
                    <Text style={styles.buttonText}>Camera</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalStyle: {
        margin: normalScale(0),
    },  
    buttonGroup: {
        backgroundColor: '#e0e0e0',
        height: '15%',
        marginTop: 'auto',
        flexDirection: 'row',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonOptions: {
        width: horizontalScale(65), 
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'black'
    }
})