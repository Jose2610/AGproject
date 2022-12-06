import {
    Image,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import defaultPic from '../assets/agpic.jpeg';
import { ThemeColors } from '../components/Theme';
import { horizontalScale, normalScale, verticalScale } from './Responsive';

export default function ImageUploader({ uri, onPress }) {
    return (
        <SafeAreaView style={imageStyles.container}>
            <SafeAreaView style={imageStyles.borderPic} />
            <Image style={imageStyles.profilePic} source={uri ? {uri} : defaultPic} />

            <SafeAreaView style={imageStyles.uploadButtonContainer}>
                <TouchableOpacity onPress={onPress} style={imageStyles.uploadButton}>
                    <Icon name="edit" size={25} color='black' />
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const imageStyles = StyleSheet.create({
    container: {
        height: verticalScale(150),
        width: horizontalScale(150),
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(15),
        marginBottom: verticalScale(25)
    },
    uploadButtonContainer: {
        elevation: 1,
        position: 'absolute',
        right: horizontalScale(0),
        bottom: verticalScale(0),
        backgroundColor: '#fff',
        borderRadius: 999,
        padding: normalScale(8),
    },
    uploadButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        width: horizontalScale(135),
        height: verticalScale(135),
        borderRadius: 999,
    },
    borderPic: {
        position: 'absolute',
        borderRadius: 999,
        borderColor: ThemeColors.Extras.MiddleBlueGreen,
        borderWidth: 4,
        padding: normalScale(80)
    }
})