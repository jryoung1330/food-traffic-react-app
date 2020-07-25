import React from 'react';
import { ScrollView, View } from 'react-native';

const AdjustableScrollView = (props) => {
    return (
        <View style={props.style}>
            <ScrollView
                horizontal={props.horizontal}
                showsVerticalScrollIndicator={
                    props.showsVerticalScrollIndicator
                }
                showsHorizontalScrollIndicator={
                    props.showsHorizontalScrollIndicator
                }
            >
                {props.children}
            </ScrollView>
        </View>
    );
};

export default AdjustableScrollView;
