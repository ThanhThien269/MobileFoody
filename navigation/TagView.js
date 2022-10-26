import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet ,Text, View ,TouchableOpacity} from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from '../views/Home'
import Login from '../views/Login'
import Category from '../views/Category';
import CartScreen from '../views/CartScreen'

import NotifyScreen from '../views/NotifyScreen'
import ChatScreen from '../views/ChatScreen'
import Profile from '../views/Profile';
import Food from '../views/Food'
import DetailsProfile from '../views/DetailsProfile';
import LikeScreen from '../views/LikeScreen';
import Introduce from '../views/Introduce';
import Register from '../views/Register';

const navOptionHandler = () => ({
    headerShown: false
})

function HomeStack(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={navOptionHandler}/>
            <Stack.Screen name="Category" component={Category} options={navOptionHandler}/>
            <Stack.Screen name="CartScreen" component={CartScreen} options={navOptionHandler}/>
            <Stack.Screen name="NotifyScreen" component={NotifyScreen} options={navOptionHandler}/>
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={navOptionHandler}/>
            <Stack.Screen name="Profile" component={Profile} options={navOptionHandler}/>
            <Stack.Screen name="Food" component={Food} options={navOptionHandler}/>
            <Stack.Screen name="DetailsProfile" component={DetailsProfile} options={navOptionHandler}/>
            <Stack.Screen name="LikeScreen" component={LikeScreen} options={navOptionHandler}/>
            <Stack.Screen name="Introduce" component={Introduce} options={navOptionHandler}/>
        </Stack.Navigator>
    )
}

function HomeDrawer(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
          drawerStyle: {backgroundColor: '#9c27b0'},
          drawerLabelStyle: {color: '#FFF'},
          headerStyle: { backgroundColor: '#9c27b0'},
          headerTintColor: '#FFF',
          drawerItemStyle: {borderBottomWidth:1, borderBottomColor: '#FFF'},
          drawerActiveBackgroundColor: '#6a0080'
        }}
        >
        <Drawer.Screen name="Home" component={HomeTab} optiosn={ {title:"Home",
            drawerIcon: ({size}) => <Ionicons name='home-outline' color='#FFF' size={size}/> }}/>  
        <Drawer.Screen name="Login" component={Login} optiosn={ {title:"Login",
            drawerIcon: ({size}) => <Ionicons name='introduce' color='#FFF' size={size}/> }}/>
        <Drawer.Screen name="Register" component={Register} optiosn={ {title:"Register",
            drawerIcon: ({size}) => <Ionicons name='introduce' color='#FFF' size={size}/> }}/>  
        <Drawer.Screen name="Introduce" component={Introduce} optiosn={ {title:"Introduce",
            drawerIcon: ({size}) => <Ionicons name='introduce' color='#FFF' size={size}/> }}/>
        </Drawer.Navigator>
    )
}

function HomeTab(){
    const Tab=createBottomTabNavigator();
    return (
        <Tab.Navigator  screenOptions={{
            tabBarShowLabel:false,
            headerShown: false,
            tabBarStyle: {
            position:'absolute',
           
            elevation:0,
            backgroundColor:'#eeeeee',
            height:50,
            
            opacity:0.8,
            paddingBottom:20,
            ...styles.shadow
            }
            }} >
            <Tab.Screen  name="Home" component={Home} options={{
                tabBarIcon:({focused})=>(
                    <View style={styles.iconView}>
                        <Ionicons  name='home-outline' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000'}} />
                    </View>
                )
            }} />
            <Tab.Screen name="Category" component={Category} options={{
                 tabBarIcon:({focused})=>(
                     <View style={styles.iconView}>
                         <Ionicons  name='list' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000'}} />     
                    </View>
                 )
            }}/>
            <Tab.Screen name="Chat" component={ChatScreen} options={{
                 tabBarIcon:({focused})=>(
                     <View style={styles.iconView}>
                         <Ionicons  name='chatbubbles-outline' size={20}  style={{ color: focused ? '#1976d2' : '#000'}} />     
                     </View>
                 )
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                 tabBarIcon:({focused})=>(
                     <View style={styles.iconView}>
                         <Ionicons  name='person-outline' size={20}  style={{ color: focused ? '#1976d2' : '#000'}} />    
                     </View>
                 )
            }}/>
        </Tab.Navigator>
    )
}

export default function TagView(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeDrawer} options={navOptionHandler}/>
            <Stack.Screen name="Category" component={Category} options={navOptionHandler}/>
            <Stack.Screen name="CartScreen" component={CartScreen} options={navOptionHandler}/>
            <Stack.Screen name="NotifyScreen" component={NotifyScreen} options={navOptionHandler}/>
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={navOptionHandler}/>
            <Stack.Screen name="Profile" component={Profile} options={navOptionHandler}/>
            <Stack.Screen name="Food" component={Food} options={navOptionHandler}/>
            <Stack.Screen name="DetailsProfile" component={DetailsProfile} options={navOptionHandler}/>
            <Stack.Screen name="LikeScreen" component={LikeScreen} options={navOptionHandler}/>
            <Stack.Screen name="Introduce" component={Introduce} options={navOptionHandler}/>
        </Stack.Navigator>
    )
}
    
const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    iconView:{
        alignContent:'center',
        justifyContent:'center',
        top:10,
    },
    btn: {
        backgroundColor: '#1976d2',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 55/2,
        top:-15,
    },
    notiBtn:{
        color:'#fff'
    }
});