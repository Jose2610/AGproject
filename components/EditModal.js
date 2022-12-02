import {
    Modal,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ImagePicker({ isVisible, onClose, onGalleryPress, onCameraPress }) {
    return (
        <Modal
            animationType='slide'
            visible={isVisible}
            onRequestClose={onClose}
            style={styles.modal}
        >
            <SafeAreaView style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonOptions} onPress={onGalleryPress}>
                    <Icon name='photo-library' size={25} color='blue' />
                    <Text style={styles.buttonText}>Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOptions} onPress={onCameraPress}>
                    <Icon name='photo-camera' size={25} color='blue' />
                    <Text style={styles.buttonText}>Camera</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'red'
    },
    buttonGroup: {
        backgroundColor: 'green'
    },
    buttonOptions: {
        backgroundColor: 'blue'
    },
    buttonText: {
        color: 'black'
    }
})