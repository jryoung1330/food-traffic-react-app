import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MontserratText from '../components/MontserratText';
import Section from '../components/Section';
import TouchableComponent from '../components/TouchableComponent';

const ProfileScreen = (props) => {
    const [changeEmail, setChangeEmail] = useState(false);
    const [changePassword, setChangePassword] = useState(false);

    const toggleChangeEmailState = () => {
        setChangeEmail(!changeEmail);
    };

    const toggleChangePasswordState = () => {
        setChangePassword(!changePassword);
    };

    const ChangeButton = (props) => {
        return (
            <TouchableComponent onPress={props.toggleFunction}>
                <View>
                    <MontserratText style={styles.buttonText}>
                        {props.btnText}
                    </MontserratText>
                </View>
            </TouchableComponent>
        );
    };

    const EmailInput = () => {
        return changeEmail ? (
            <View style={styles.row}>
                <TextInput style={styles.input} placeholder="Email" />
                <ChangeButton
                    toggleFunction={toggleChangeEmailState}
                    btnText={'Save'}
                />
                <ChangeButton
                    toggleFunction={toggleChangeEmailState}
                    btnText={'Cancel'}
                />
            </View>
        ) : (
            <View style={styles.row}>
                <MontserratText style={styles.input}>
                    example@example.com
                </MontserratText>
                <ChangeButton
                    toggleFunction={toggleChangeEmailState}
                    btnText={'Change'}
                />
            </View>
        );
    };

    const PasswordInput = () => {
        return changePassword ? (
            <View style={styles.row}>
                <TextInput style={styles.input} placeholder="Password" />
                <ChangeButton
                    toggleFunction={toggleChangePasswordState}
                    btnText={'Save'}
                />
                <ChangeButton
                    toggleFunction={toggleChangePasswordState}
                    btnText={'Cancel'}
                />
            </View>
        ) : (
            <View style={styles.row}>
                <MontserratText style={styles.input}>*******</MontserratText>
                <ChangeButton
                    toggleFunction={toggleChangePasswordState}
                    btnText={'Change'}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.screen}>
            {/* User Full Name */}
            <MontserratText
                isBold={true}
                fontSize={22}
                style={styles.profileName}
            >
                Andrea Juarez
            </MontserratText>
            <Section title="Account Info">
                <EmailInput />
                <PasswordInput />
            </Section>
            <Section style={styles.boxRow}>
                {/* Number of Favorites */}
                <View style={styles.box}>
                    <TouchableComponent
                    // onPress={() => {
                    //     props.navigation.navigate({
                    //         routeName: 'FoodTruck',
                    //         params: { id: itemData.item.id },
                    //     });
                    // }}
                    >
                        <View>
                            <MontserratText
                                fontSize={18}
                                centerText={true}
                                isBold={true}
                            >
                                10
                            </MontserratText>
                            <MontserratText>FAVORITES</MontserratText>
                        </View>
                    </TouchableComponent>
                </View>
            </Section>
            <Section>
                <View style={styles.box}>
                    {/* Number of Orders */}
                    <TouchableComponent>
                        <View>
                            <MontserratText
                                fontSize={18}
                                centerText={true}
                                isBold={true}
                            >
                                10
                            </MontserratText>
                            <MontserratText>ORDERS</MontserratText>
                        </View>
                    </TouchableComponent>
                </View>
            </Section>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    profileName: {
        marginTop: 50,
        textDecorationLine: 'underline',
    },
    row: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        marginHorizontal: 20,
        width: '70%',
    },
    boxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        padding: 20,
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'montserrat',
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'lightgray',
    },
});

export default ProfileScreen;
