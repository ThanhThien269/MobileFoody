import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet ,Text, View ,TouchableOpacity} from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from '../views/Home'
import CartScreen from '../views/CartScreen'

import NotifyScreen from '../views/NotifyScreen'
import ChatScreen from '../views/ChatScreen'




const Tab=createBottomTabNavigator();



const Tabs=()=>{
    return(
       
            
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
                <Tab.Screen name="Cart" component={CartScreen} options={{
                    tabBarIcon:({focused})=>(
                        <View style={styles.iconView}>
                            <Ionicons  name='cart-outline' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000'}} />
                           
                        </View>
                     )
                }}/>
                
                <Tab.Screen name="Notify" component={NotifyScreen} options={{
                    tabBarIcon:({focused})=>(
                        <View style={styles.iconView}>
                            <Ionicons  name='notifications-outline' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000'}}  />
                           
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
            </Tab.Navigator>
            
            
        )
    }
    
    
    // export default TagManagementView;
    export default Tabs;
    
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
        // tabIcon:{
        //     width:25,
        //     height:25,
           
        // },
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