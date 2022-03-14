
import { useEffect, useState } from 'react';
import { Button, TextInput, TouchableHighlight } from 'react-native';
import CategoryIcon from './../../../assets/images/category.svg';
import React from "react";
import { Text, View } from 'native-base';
import TextChanger from './TextChanger';
import { useDispatch, useSelector } from 'react-redux';
import { categoryRequested } from '../../screens/my-day-tasks/categorySlice';
import ModalDropdown from 'react-native-modal-dropdown';

const CategoryName = ({ category,handleChange }:{category:string,handleChange:any}) => {
    const items = useSelector((state: any) => state.category.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryRequested());
    }, [dispatch]);

    const categories = items.map((item: any) => item.name);
    const setSelectedValue = (index:number) => {
        handleChange('categoryName',categories[index])
    }
    return (
        <View flex="1" flexDirection="row" borderBottomWidth="1" borderBottomColor="#E2E2EA" pt="2" pb="2">
            <View pl="3" justifyContent="center">
                <CategoryIcon />
            </View>
            <View flex="1" pl="3">
                <Text fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="12" lineHeight="14" color="#92929D" textTransform="uppercase">CATEGORY NAME</Text>
                <View flex="1" flexDirection="row" pt="1">
                    <ModalDropdown textStyle={{fontSize:14}} style={{ width:200}} options={categories} defaultValue={category} onSelect={(index) => setSelectedValue(index)} />
                </View>
            </View>
        </View>
    );
}
export default CategoryName;