import React from 'react';
import { Text } from 'react-native';

const MontserratText = (props) => {
    return (
        <Text
            style={{
                ...props.style,
                ...{
                    fontFamily: props.isBold ? 'montserrat-bold' : 'montserrat',
                    textAlign: props.centerText ? 'center' : 'auto',
                    fontSize: props.fontSize,
                },
            }}
        >
            {props.children}
        </Text>
    );
};

export default MontserratText;
