import React, { useCallback, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import AdjustableScrollView from '../components/AdjustableScrollView';
import CustomButton from '../components/CustomButton';
import MontserratText from '../components/MontserratText';
import Section from '../components/Section';
import Label from '../components/Label';
import { addToCart } from '../store/actions/orders';
import AppTheme from '../constants/AppTheme';

const MenuItemDetail = (props) => {
    const menuItemId = props.menuItem.id;
    const [showLabelInfo, setShowLabelInfo] = useState(false);
    const dispatch = useDispatch();

    const add = useCallback(() => {
        dispatch(addToCart(menuItemId));
    }, [dispatch, menuItemId]);

    const addItemToCart = () => {
        add();
        props.animationStart(props.menuItem.name);
    };

    return (
        <View style={styles.cardContainer}>
            {/* Menu Item Card Image */}
            <View style={styles.imgContainer}>
                <ImageBackground
                    style={styles.img}
                    source={{ uri: props.menuItem.image }}
                >
                    <Text style={styles.imgName}>{props.menuItem.name}</Text>
                </ImageBackground>
            </View>

            {/* Add To Cart Button */}
            <View style={styles.buttonContainer}>
                <CustomButton onPress={addItemToCart}>
                    ${props.menuItem.price.toFixed(2)}
                </CustomButton>
            </View>

            {/* Menu Item Details */}
            <AdjustableScrollView showsVerticalScrollIndicator={false} style={styles.scrollSections}>
                <Section title="Description">
                    <MontserratText centerText={true}>
                        {props.menuItem.description}
                    </MontserratText>
                </Section>
                <Section title="Calories">
                    <MontserratText centerText={true}>
                        {props.menuItem.calories} cal.
                    </MontserratText>
                </Section>
                <Section title="Dietary Restrictions" showInfo={true} 
                    onInfoButtonPress={() => setShowLabelInfo(!showLabelInfo)}>
                    <View style={styles.restrictions}>
                        {props.menuItem.vegetarian ? <Label>VT</Label> : null}
                        {props.menuItem.vegan ? <Label>VG</Label> : null}
                        {props.menuItem.glutenFree ? <Label>GF</Label> : null}
                        {props.menuItem.dairyFree ? <Label>DF</Label> : null}
                        {props.menuItem.containsNuts ? <Label>CN</Label> : null}
                        {!props.menuItem.vegetarian &&
                        !props.menuItem.vegan &&
                        !props.menuItem.glutenFree &&
                        !props.menuItem.dairyFree &&
                        !props.menuItem.containsNuts ? <MontserratText centerText={true}>
                        {"None"}
                    </MontserratText> : null}
                    </View>
                </Section>
                {showLabelInfo ? <Section title={"Information"} titleFontSize={16} style={{borderRadius: 20, borderWidth: 1}}>
                    <MontserratText>{"VT = Vegetarian"}</MontserratText>
                    <MontserratText>{"VG = Vegan"}</MontserratText>
                    <MontserratText>{"GF = Gluten-free"}</MontserratText>
                    <MontserratText>{"DF = Dairy-free"}</MontserratText>
                    <MontserratText>{"CN = Contains Nuts"}</MontserratText>
                </Section> : null}
                <Section title="Ingredients">
                    <MontserratText centerText={true}>
                        {props.menuItem.ingredients}
                    </MontserratText>
                </Section>
            </AdjustableScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgContainer: {
        height: 180,
        width: '70%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    img: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },
    imgName: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: AppTheme.secondaryColor,
        marginBottom: 5,
        fontFamily: 'montserrat',
        fontSize: 16,
    },
    buttonContainer: {
        width: '70%',
        marginVertical: 20,
    },
    scrollSections: {
        height: '50%',
        width: '70%',
    },
    notification: {
        bottom: 0,
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#008000',
    },
    restrictions: {
        flexDirection: 'row',
    },
});

export default MenuItemDetail;
