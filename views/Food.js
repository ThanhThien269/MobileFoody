import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Food = ({navigation,}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>Go back</TouchableOpacity>
            <Text>Food</Text>
        </View>
    );
}

export default Food;
const styles = StyleSheet.create({
    container: {
        flex:1
    }
});