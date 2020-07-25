import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import AppTheme from '../constants/AppTheme';
import TouchableComponent from '../components/TouchableComponent';

const RegisterUserScreen = (props) => {
    return (
        <View style={styles.screen}>
            <MaterialIcons name="account-circle" size={70} />
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput style={styles.input} placeholder="User Name" />
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
                <TouchableComponent
                    onPress={() => {
                        props.navigation.navigate({
                            routeName: 'Map',
                        });
                    }}
                >
                    <MaterialIcons name="check" size={50} />
                </TouchableComponent>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppTheme.secondaryColor
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

export default RegisterUserScreen;
