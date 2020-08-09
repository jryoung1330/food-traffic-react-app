import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FoodTruckScreen from '../screens/FoodTruckScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterVendorScreen from '../screens/RegisterVendorScreen';
import RegisterUserScreen from '../screens/RegisterUserScreen';
import AppTheme from '../constants/AppTheme';
import CheckoutScreen from '../screens/CheckoutScreen';


const mainNav = createStackNavigator(
    {
        Map: {
            name: "Map",
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        FoodTruck: {
            name: "Food Truck",
            screen: FoodTruckScreen,
            // navigationOptions: {
            //     headerShown: false
            // }
        }
    },
    {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTitleStyle:{
                fontFamily: 'montserrat-bold'
            }
        }
    },
);

const searchNav = createStackNavigator(
    {
        Search: {
            name: "Search",
            screen: SearchScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        FoodTruck: FoodTruckScreen,
    },
    {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTitleStyle:{
                fontFamily: 'montserrat-bold'
            }
        }
    },
);

const cartNav = createStackNavigator(
    {
        Cart: {
            name: "Cart",
            screen: CartScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        Checkout: CheckoutScreen,
    },
    {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTitleStyle:{
                fontFamily: 'montserrat-bold'
            }
        }
    },
);

const LoginRegisterNav = createStackNavigator(
    {
        Login: {
            name: "Login",
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        RegisterVendor: {
            name: "RegisterVendor",
            screen: RegisterVendorScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        RegisterUser: {
            name: "RegisterUser",
            screen: RegisterUserScreen,
            navigationOptions: {
                headerShown: false
            }
        }
    },
);

const tabBarConfig = {
    Login: {
        screen: LoginRegisterNav,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <MaterialIcons
                        name="fingerprint"
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
        },
    },
    Map: {
        screen: mainNav,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <MaterialIcons
                        name="map"
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
        },
    },
    Search: {
        screen: searchNav,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <MaterialIcons
                        name="search"
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
        },
    },
    Cart: {
        screen: cartNav,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <MaterialIcons
                        name="shopping-cart"
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <MaterialIcons
                        name="account-circle"
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
        },
    },
};

const MainNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabBarConfig, {
              barStyle: {
                  backgroundColor: 'white',
                  padding: 5
              },
              activeColor: AppTheme.primaryColor,
              shifting: true,
          })
        : createBottomTabNavigator(tabBarConfig, {
              tabBarOptions: {
                  activeTintColor: AppTheme.primaryColor,
              },
          });

export default createAppContainer(MainNavigator);
