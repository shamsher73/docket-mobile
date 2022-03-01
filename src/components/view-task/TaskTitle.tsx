
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import OvalIcon from './../../../assets/oval.svg';
import React from "react";

const TaskTitle = ({ title,handleChange }:{title:string,handleChange:any}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    return (
        <View style={styles.container}>
            <OvalIcon/>
            <View style={styles.subContainer}>
                <Text style={styles.subText}>{title ? title : "-"}</Text>
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
   
    subContainer: {
        display: "flex",
        paddingLeft: 14,
    },
   
    subText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.1,
        color: "#44444F",
    }
});

export default TaskTitle;