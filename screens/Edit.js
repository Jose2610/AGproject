import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input-formatted';
import { ThemeColors } from '../components/Theme';
import { horizontalScale, normalScale, verticalScale } from '../components/Responsive';

const Edit = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const [name, setName] = useState(route.params.name);
    const [phoneNumber, setNewPhone] = useState(route.params.phone);
    const [unformattedNumber, setUnformattedNumber] = useState('');
    const [email, setEmail] = useState(route.params.email);
    const [bio, setBio] = useState(route.params?.bio);

    let lastCount = route.params.bio.length;
    const [count, setCount] = useState(lastCount);

    const [nameStatus, setNameStatus] = useState('');
    const [phoneStatus, setPhoneStatus] = useState('');
    const [emailStatus, setEmailStatus] = useState('');
    const [bioStatus, setBioStatus] = useState('');

    const [focusName, setFocusName] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false);
    const [focusBio, setFocusBio] = useState(false);

    const handleFocusName = () => { setFocusName(true); }
    const handleBlurName = () => { setFocusName(false); }
    const handleFocusEmail = () => { setFocusEmail(true); }
    const handleBlurEmail = () => { setFocusEmail(false); }
    const handleFocusBio = () => { setFocusBio(true); }
    const handleBlurBio = () => { setFocusBio(false); }

    const validateName = (text) => {
        if (text === undefined) { return false; }

        if (text.length === 0 || text.length > 70) { return false; } 
        else { return true; }
    }

    useEffect(() => {
        if (validateName(name)) { setNameStatus(ThemeColors.Extras.MiddleBlueGreen); } 
        else { setNameStatus(ThemeColors.Extras.OrangeSoda); }
    }, [name])

    const validatePhone = (text) => {
        if (text === undefined) { return false; }
        let phoneLength = text.length;
        if (phoneLength != 14) { return false; } 
        else { return true; }
    }

    useEffect(() => {
        if (validatePhone(unformattedNumber)) { setPhoneStatus(ThemeColors.Extras.MiddleBlueGreen); } 
        else { setPhoneStatus(ThemeColors.Extras.OrangeSoda); }
    }, [phoneNumber, unformattedNumber])

    const validateEmail = (text) => {
        if (text === undefined) { return false; }

        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(text) === false) { return false; } 
        else { return true; }
    }

    useEffect(() => {
        if (validateEmail(email)) { setEmailStatus(ThemeColors.Extras.MiddleBlueGreen); }
        else { setEmailStatus(ThemeColors.Extras.OrangeSoda); }
    }, [email])

    const validateBio = (text) => {
        if (text === undefined) { return false; }

        if (bio.length > 250) { return false; } 
        else { return true; }
    }
    
    useEffect(() => {
        if (validateBio(bio)) { setBioStatus(ThemeColors.Extras.MiddleBlueGreen); }
        else { setBioStatus(ThemeColors.Extras.OrangeSoda); }
        let newCount = bio.length;
        setCount(newCount); 
    }, [bio, count])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
            <Text style={{ color: ThemeColors.Extras.SpanishGrey, marginTop: verticalScale(25) }}>Name</Text>
            <TextInput 
                placeholder='Please Enter Name'
                placeholderTextColor='lightgrey'
                style={styles.normalStyle}
                value={name}
                selectionColor={nameStatus}
                underlineColorAndroid={focusName ? nameStatus : ThemeColors.Extras.SpanishGrey}
                onFocus={handleFocusName}
                onBlur={handleBlurName}
                onChangeText={setName}/>

            <Text style={{ color: ThemeColors.Extras.SpanishGrey, marginTop: verticalScale(25) }}>Phone Number</Text>
            <PhoneInput 
                defaultValue={phoneNumber}
                defaultCode="US"
                layout='first'
                onChangeText={setUnformattedNumber}
                onChangeFormattedText={setNewPhone}
                filterProps
                keyboardType='phone-pad'
                flagButtonStyle={styles.flagStyle}
                containerStyle={[styles.trueContainerStyle, { borderBottomColor: phoneStatus }]}
                textInputStyle={styles.textInputStyle}
                textContainerStyle={{ backgroundColor: ThemeColors.Extras.Offwhite }}
                countryPickerButtonStyle={{ backgroundColor: ThemeColors.Extras.Offwhite }}
                codeTextStyle={{ backgroundColor: ThemeColors.Extras.Offwhite }}/>

            <Text style={{ color: ThemeColors.Extras.SpanishGrey, marginTop: verticalScale(25) }}>Email Address</Text>
            <TextInput 
                placeholder='Email Address'
                placeholderTextColor='lightgrey'
                style={styles.normalStyle}
                value={email}
                selectionColor={emailStatus}
                underlineColorAndroid={focusEmail ? emailStatus : ThemeColors.Extras.SpanishGrey}
                onFocus={handleFocusEmail}
                onBlur={handleBlurEmail}
                onChangeText={setEmail}/>

            <Text style={{ color: ThemeColors.Extras.SpanishGrey, marginTop: verticalScale(25) }}>Tell me about yourself</Text>
            <TextInput 
                placeholder='Biography...'
                placeholderTextColor='lightgrey'
                style={styles.normalStyle}
                multiline
                value={bio}
                selectionColor={bioStatus}
                underlineColorAndroid={focusBio ? bioStatus : ThemeColors.Extras.SpanishGrey}
                onFocus={handleFocusBio}
                onBlur={handleBlurBio}
                onChangeText={setBio}/>
            <Text style={{ color: ThemeColors.Extras.SpanishGrey, marginTop: verticalScale(2), alignSelf: 'flex-end' }}>Character Count: {count}</Text>

            <TouchableOpacity 
                title='Save'
                style={styles.buttonContainer}
                onPress={() => {{ 
                    if (!validateName(name) || !validateEmail(email) || !validatePhone(unformattedNumber) || !validateBio(bio)) {
                        Alert.alert('Alert', "Can't save with these values!")
                    } else {
                        navigation.navigate({
                            name: 'Profile',
                            params: { 
                                name: name, 
                                phone: unformattedNumber, 
                                email: email,
                                bio: bio
                            },
                            merge: true
                        })
                    }};
                }}>
                    <Text style={styles.button}>Save</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        margin: 0,
        padding: normalScale(50),
        backgroundColor: ThemeColors.Extras.Offwhite,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    editProfileText: {
        marginBottom: verticalScale(10),
        color: 'black',
        fontSize: normalScale(28),
        alignSelf: 'center'
    },  
    trueContainerStyle: {
        color: 'black',
        width: '98%',
        height: verticalScale(55),
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: ThemeColors.Extras.Offwhite,
        borderBottomWidth: horizontalScale(2),
    },
    textInputStyle: {
        color: '#000',
        backgroundColor: ThemeColors.Extras.Offwhite,
        width: horizontalScale(135),
        height: verticalScale(50)
    },
    flagStyle: {
        backgroundColor: ThemeColors.Extras.Offwhite,
        width: horizontalScale(75),
        height: verticalScale(50),
    },
    normalStyle: {
        backgroundColor: ThemeColors.Extras.Offwhite,
        padding: normalScale(10), 
        color: 'black',
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(15)
    },
    button: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: normalScale(25),
        backgroundColor: ThemeColors.Extras.Jet,
        padding: normalScale(10)
    }
});

export default Edit;