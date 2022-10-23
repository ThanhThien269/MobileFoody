import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet ,Text, View } from 'react-native';
import Home from './Home';
import Introduce from './Introduce';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TagView = ({params,}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Introduce' component={Introduce}/>
                <Stack.Screen name='Food' component={Food}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default TagView;

const styles = StyleSheet.create({
    
});