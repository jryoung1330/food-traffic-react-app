import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Tag from '../components/Tag';
import TouchableComponent from '../components/TouchableComponent';
import AppTheme from '../constants/AppTheme';

const RegisterVendorScreen = (props) => {
    const FORMS = [
        'Account-Form',
        'Tag-Form',
        'Billing-Account-Form',
        'Upload-Picture-Form',
    ];
    const [formToShow, setFormToShow] = useState('Account-Form');

    const AccountForm = () => {
        let nextForm = FORMS[1];
        return (
            <View style={styles.screen}>
                <MaterialIcons color={AppTheme.primaryColor} name="business" size={70} />
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Display Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Account Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Re-enter Password"
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.forwardButton}>
                    <TouchableComponent onPress={() => setFormToShow(nextForm)}>
                        <MaterialIcons color={AppTheme.primaryColor} name="arrow-forward" size={50} />
                    </TouchableComponent>
                </View>
            </View>
        );
    };

    const TagForm = () => {
        let lastForm = FORMS[0];
        let nextForm = FORMS[2];
        return (
            <View style={styles.screen}>
                <MaterialIcons color={AppTheme.primaryColor} name="add-circle-outline" size={70} />
                <View style={styles.tagForm}>
                    <Tag style={styles.mv10}>Spanish</Tag>
                    <Tag style={styles.mv10}>Mexican</Tag>
                    <Tag style={styles.mv10}>German</Tag>
                    <Tag style={styles.mv10}>Cuban</Tag>
                    <Tag style={styles.mv10}>Grilled</Tag>
                    <Tag style={styles.mv10}>Comfort</Tag>
                    <Tag style={styles.mv10}>Asian</Tag>
                    <Tag style={styles.mv10}>Chinese</Tag>
                    <Tag style={styles.mv10}>Japanese</Tag>
                </View>
                <View style={styles.forwardButton}>
                    <TouchableComponent onPress={() => setFormToShow(lastForm)}>
                        <MaterialIcons color={AppTheme.primaryColor} name="arrow-back" size={50} />
                    </TouchableComponent>
                    <TouchableComponent onPress={() => setFormToShow(nextForm)}>
                        <MaterialIcons color={AppTheme.primaryColor} name="arrow-forward" size={50} />
                    </TouchableComponent>
                </View>
            </View>
        );
    };

    const BillingAccountForm = () => {
        let lastForm = FORMS[1];
        return (
            <View style={styles.screen}>
                <MaterialIcons color={AppTheme.primaryColor} name="credit-card" size={70} />
                <KeyboardAvoidingView style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name on Account"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Account Number"
                        keyboardType="number-pad"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Re-enter Account Number"
                        keyboardType="number-pad"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Routing Number"
                        keyboardType="number-pad"
                        secureTextEntry={true}
                    />
                </KeyboardAvoidingView>
                <View style={styles.forwardButton}>
                    <TouchableComponent onPress={() => setFormToShow(lastForm)}>
                        <MaterialIcons color={AppTheme.primaryColor} name="arrow-back" size={50} />
                    </TouchableComponent>
                    <TouchableComponent
                        onPress={() => {
                            props.navigation.navigate({
                                routeName: 'Map',
                            });
                        }}
                    >
                        <MaterialIcons color={AppTheme.primaryColor} name="check" size={50} />
                    </TouchableComponent>
                </View>
            </View>
        );
    };

    switch (formToShow) {
        case 'Account-Form':
            return <AccountForm />;
        case 'Tag-Form':
            return <TagForm />;
        case 'Billing-Account-Form':
            return <BillingAccountForm />;
        default:
            return <AccountForm />;
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppTheme.secondaryColor,
    },
    form: {
        marginTop: 60,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formRow: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    mv10: {
        marginVertical: 10,
    },
    tagForm: {
        marginTop: 60,
        marginBottom: 60,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    pictureContainer: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 1,
    },
    input: {
        width: '70%',
        margin: 10,
        padding: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        fontFamily: 'montserrat',
    },
    forwardButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
    },
});

export default RegisterVendorScreen;
