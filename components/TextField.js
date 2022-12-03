import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { normalScale, verticalScale, horizontalScale } from './Responsive';
import { useNavigation } from '@react-navigation/native';

export default function TextField() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Name</Text>
            <Text style={styles.currentText}>Jose Luis Sanchez</Text>
            <View style={styles.divider}/>

            <Text style={styles.headerText}>Phone</Text>
            <Text style={styles.currentText}>(509) 930-7201</Text>
            <View style={styles.divider}/>

            <Text style={styles.headerText}>Email</Text>
            <Text style={styles.currentText}>jose2610sanchez@outlook.com</Text>
            <View style={styles.divider}/>

            <Text style={styles.headerText}>Tell me about yourself</Text>
            <Text style={styles.currentText}>
            I am a recent computer science major from Central Washington University, 
            who is eager to refine their knowledge of software engineering and development. 
            Looking for an opportunity in Full-Stack Development, Software Engineering, and/or UX/UI Design.
            </Text>
            <View style={styles.divider}/>

            <TouchableOpacity style={styles.editButtonContainer} onPress={() => navigation.navigate('Edit')}>
                <Text style={styles.editButton}>Edit Profile</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: verticalScale(25)
    },
    headerText: {
        color: '#9e9e9e',
        fontSize: normalScale(15),
        marginBottom: verticalScale(2)
    },
    currentText: {
        color: '#000',
        fontSize: normalScale(15)
    },
    editButtonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(15)
    },
    editButton: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: normalScale(25),
        backgroundColor: '#000',
        padding: normalScale(10)
    },
    divider: {
        borderBottomColor: '#9e9e9e',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: horizontalScale(300),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10)
    },
})