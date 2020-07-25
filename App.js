import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from "redux";
import MainNavigator from './navigation/MainNavigator';
import foodtrucksReducer from './store/reducers/foodtrucks';
import orderReducer from './store/reducers/orders';

enableScreens();

const rootReducer = combineReducers({
    foodtrucks: foodtrucksReducer,
    orders: orderReducer,
});

const store = createStore(rootReducer);

export default function App() {
    let [fontsLoaded] = useFonts({
        montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
        'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <MainNavigator />
                </SafeAreaProvider>
            </Provider>
        );
    }
}
