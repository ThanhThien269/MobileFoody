import React from 'react';
import {StyleSheet ,Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const items =[
    {   id: 1, 
        name: 'Yêu thích',
        icon: 'heart',
    },
    {   id: 2, 
        name: 'Thanh toán',
        icon: 'dollar-sign',
    },
    {   id: 3, 
        name: 'Hóa đơn',
        icon: 'file-invoice-dollar',
    },
    {   id: 4, 
        name: 'Lịch sử',
        icon: 'history',
    },
    {   id: 5, 
        name: 'Đăng xuất',
        icon: 'sign-out-alt',
    }
]

const Profile = ({navigation,}) => {
    const HeaderComponent = () => {
        return(
            <View style={styles.view}>
                <Text style={styles.tk}>Tài khoản</Text>
            </View>
        )
    }
    
    const ItemComponent = ({item}) => {
        return(
            <View style={styles.account}>
                <TouchableOpacity style={{flexDirection:'row',paddingVertical:10}} onPress={() => {navigation.navigate('LikeScreen')}}>
                    <Icon name={item.icon} size={20} color={'black'} style={{marginStart:10,paddingTop: 3}}/>
                    <Text style={styles.signout}>{item.name}</Text>
                    <View style={{flex:1}} />
                        <Icon name='chevron-right' size={20} color={'black'} style={{paddingEnd: 10,opacity:0.5}}/>
                </TouchableOpacity>
            </View>
        )
    }
    
    return(
        <View>
            <View>
                <FlatList 
                    ListHeaderComponent= {HeaderComponent}
                >
                </FlatList>
            </View>
            <View style={{flexDirection:'row',paddingVertical:10}}>
                <Image  style={styles.imgProfile}  source={{uri:'https://media.vov.vn/sites/default/files/styles/large/public/2021-11/dbruyne.jpeg'}}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.profilename}>Kevin</Text>
                    <TouchableOpacity style={{flexDirection:'row',flex:1}} onPress={() => {navigation.navigate('DetailsProfile')}}>
                        <Text style={styles.profile}>Xem thông tin cá nhân</Text>
                        <Icon name='chevron-right' size={20} color={'black'} style={{paddingStart: 10,paddingTop:7}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <FlatList 
                    data={items}
                    renderItem= {ItemComponent}
                >
                </FlatList>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    view: {
        height: 55,
        backgroundColor: 'red',
    },
    tk: {
        alignSelf: 'center',
        lineHeight: 55,
        color: 'white',
        fontSize: 25,
        color: 'black',
        fontWeight:'bold',
    },
    profilename: {
        color: 'black',
        fontSize : 25,
        paddingStart: 10,
        paddingTop: 3,
        fontWeight:'bold',
    },
    profile: {
        color: '#7bff3e',
        fontSize : 20,
        paddingStart: 10,
        paddingTop: 3,
    },
    imgProfile:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginStart: 10,
        marginTop: 10
    },
    account: {
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 5,
        marginStart: 10,
        marginEnd: 10,
        backgroundColor: 'white',
        width: '95%',
        height: 'auto',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    signout: {
        color: 'black',
        fontSize: 20,
        paddingStart: 10
    }
});