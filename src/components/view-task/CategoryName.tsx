
import { useEffect} from 'react';
import CategoryIcon from './../../../assets/images/category.svg';
import React from "react";
import { Text, View } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { categoryRequested, CategoryType } from '../../screens/my-day-tasks/categorySlice';
import ModalDropdown from 'react-native-modal-dropdown';
import { RootState } from '../../app/store';

const CategoryName = ({ category,handleChange }:{category:string,handleChange:Function}) => {
    const items = useSelector((state: RootState) => state.category.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryRequested());
    }, [dispatch]);

    const categories = items.map((item: CategoryType) => item.name);
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
                    <ModalDropdown textStyle={{fontSize:14}} style={{ width:200}} options={categories} defaultValue={category} onSelect={(index:number) => setSelectedValue(index)} />
                </View>
            </View>
        </View>
    );
}
export default CategoryName;