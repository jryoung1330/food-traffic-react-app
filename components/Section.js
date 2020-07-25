import React from 'react';
import { StyleSheet, View } from 'react-native';
import InfoButton from './InfoButton';
import MontserratText from './MontserratText';

const Section = (props) => {
    return (
        <View
            style={{
                ...props.style,
                ...styles.sectionContainer,
                ...{ alignItems: props.alignTitleLeft ? 'flex-start' : 'center' },
            }}
        >
            {props.title ? (
                <View style={{ flexDirection: 'row' }}>
                    {/* Section Title */}
                    <MontserratText
                        style={{ ...props.titleStyle, ...styles.title }}
                        fontSize={
                            props.titleFontSize ? props.titleFontSize : 22
                        }
                        isBold={true}
                    >
                        {props.title}
                    </MontserratText>
                    {/* Optional Info Button */}
                    {props.showInfo ? (
                        <InfoButton onPress={props.onInfoButtonPress} />
                    ) : null}
                </View>
            ) : null}
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    title: {
        marginVertical: 10,
    },
});

export default Section;
