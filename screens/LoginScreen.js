import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import AppTheme from '../constants/AppTheme';

const LoginScreen = (props) => {
    return (
        <View style={styles.screen}>
            {/* Login Form */}
            <MaterialIcons color={AppTheme.primaryColor} name="traffic" size={70} />
            <KeyboardAvoidingView style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Username or Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    returnKeyType="done"
                    secureTextEntry={true}
                />
            </KeyboardAvoidingView>
            <View>
                {/* Register Vendor */}
                <View style={styles.buttonContainer}>
                    <CustomButton
                        onPress={() => {
                            props.navigation.navigate({
                                routeName: 'RegisterVendor',
                            });
                        }}
                    >
                        Register Food Truck
                    </CustomButton>
                </View>
                {/* Register User */}
                <View style={styles.buttonContainer}>
                    <CustomButton
                        onPress={() => {
                            props.navigation.navigate({
                                routeName: 'RegisterUser',
                            });
                        }}
                    >
                        Register User
                    </CustomButton>
                </View>
            </View>
        </View>
    );
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
    input: {
        width: '60%',
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: AppTheme.baseColor,
        textAlign: 'center',
        fontFamily: 'montserrat',
    },
    buttonContainer: {
        marginVertical: Platform.OS === 'android' ? 10 : 0,
    },
});

export default LoginScreen;
