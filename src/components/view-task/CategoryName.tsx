
import { useState } from 'react';
import { Button, TextInput, TouchableHighlight } from 'react-native';
import CategoryIcon from './../../../assets/images/category.svg';
import React from "react";
import { Text, View } from 'native-base';
import TextChanger from './TextChanger';

const CategoryName = ({ category,handleChange }:{category:string,handleChange:any}) => {
    return (
        <View flex="1" flexDirection="row" borderBottomWidth="1" borderBottomColor="#E2E2EA" pt="2" pb="2">
            <View pl="3" justifyContent="center">
                <CategoryIcon />
            </View>
            <TextChanger value={category} changeKey="category" handleChange={handleChange} title="category"/>
        </View>
    );
}
export default CategoryName;