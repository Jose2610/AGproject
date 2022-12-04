import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { normalScale, verticalScale, horizontalScale } from './Responsive';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ThemeColors } from './Theme'

export default function TextField() {
    const navigation = useNavigation();
    const route = useRoute();
    const [name, setName] = useState('Jose Luis Sanchez');
    const [phone, setPhone] = useState('(509) 930-7201');
    const [email, setEmail] = useState('jose2610sanchez@outlook.com');
    const [bio, setBio] = useState('I am a recent computer science major from Central Washington University, who is eager to refine their knowledge of software engineering and development. Looking for an opportunity in Full-Stack Development, Software Engineering, and/or UX/UI Design.');

    useEffect(() => {
        if (route.params?.name) { setName(route.params.name); }
        if (route.params?.phone) { setPhone(route.params.phone); }
        if (route.params?.email) { setEmail(route.params.email); }
        if (route.params?.bio) { setBio(route.params.bio); }
    }, [route.params?.name, route.params?.phone, route.params?.email, route.params?.bio]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Name</Text>
            <Text style={styles.currentText}>{route.params?.name ? route.params?.name : name}</Text>
            <SafeAreaView style={styles.divider}/>

            <Text style={styles.headerText}>Phone</Text>
            <Text style={styles.currentText}>{route.params?.phone ? route.params?.phone : phone}</Text>
            <SafeAreaView style={styles.divider}/>

            <Text style={styles.headerText}>Email</Text>
            <Text style={styles.currentText}>{route.params?.email ? route.params?.email : email}</Text>
            <SafeAreaView style={styles.divider}/>

            <Text style={styles.headerText}>Tell me about yourself</Text>
            <Text style={styles.currentText}>{route.params?.bio ? route.params?.bio : bio}</Text>
            <SafeAreaView style={styles.divider}/>

            <TouchableOpacity 
                style={styles.editButtonContainer} 
                onPress={() => navigation.navigate('Edit', { name, phone, email, bio})}>
                <Text style={styles.editButton}>Edit Profile</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: verticalScale(25),
        backgroundColor: '#fafafa',
    },
    headerText: {
        color: ThemeColors.Extras.SpanishGrey,
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
        borderBottomColor: ThemeColors.Extras.SpanishGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: horizontalScale(300),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10)
    },
})