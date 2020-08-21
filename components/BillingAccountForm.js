import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
import AppTheme from '../constants/AppTheme';
import TouchableComponent from './TouchableComponent';

const BillingAccountForm = (props) => {
    return (
        <View style={styles.screen}>
            {/* Form Icon */}
            <MaterialIcons name="credit-card" size={70} />

            {/* Form */}
            <KeyboardAvoidingView style={styles.form}>
                <TextInput style={styles.input} placeholder="Name on Card" />
                <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    keyboardType="number-pad"
                />
                <View style={styles.formRow}>
                    <TextInput
                        style={styles.input}
                        keyboardType="number-pad"
                        placeholder="MM"
                        maxLength={2}
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType="number-pad"
                        placeholder="YYYY"
                        maxLength={4}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    returnKeyType="done"
                    placeholder="CVV"
                    maxLength={4}
                />
            </KeyboardAvoidingView>

            {/* Control Flow Buttons */}
            <View style={styles.forwardButton}>
                <TouchableComponent>
                    <MaterialIcons name="arrow-back" size={50} />
                </TouchableComponent>
                <TouchableComponent
                    onPress={() => {
                        props.navigation.navigate({
                            routeName: 'Map',
                        });
                    }}
                >
                    <MaterialIcons name="arrow-forward" size={50} />
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
    input: {
        width: '70%',
        margin: 10,
        padding: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: AppTheme.baseColor,
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

export default BillingAccountForm;
