
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import CategoryIcon from './../../../assets/category.svg';
import React from "react";

const CategoryName = ({ category,handleChange }:{category:string,handleChange:any}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newCategory, setNewCategory] = useState('');

    return (
        <View style={styles.container}>
            <CategoryIcon/>
            <View style={styles.subContainer}>
                <Text style={styles.headerText}>CATEGORY</Text>
                {
                    isOpen &&
                    <View style={styles.updateBox}>
                        <TextInput style={styles.input} value={newCategory} onChangeText={(text) => setNewCategory(text)} />
                        <Button title="Update" onPress={() => {handleChange('category',newCategory);setIsOpen(false)}}/>
                    </View>
                }
                {
                    !isOpen &&
                    <TouchableHighlight onPress={() => {setIsOpen(true)}}>
                        <Text style={styles.subText}>{category ? category : "-"}</Text>
                    </TouchableHighlight>
                }
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#E2E2EA",
        padding: 12,
    },
    updateBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        width: "80%",
    },
    subContainer: {
        display: "flex",
        paddingLeft: 14,
    },
    headerText: {
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#92929D",
    },
    subText: {
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.1,
        color: "#44444F",
    }
});

export default CategoryName;