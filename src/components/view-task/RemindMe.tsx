
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import RemindMeIcon from './../../../assets/remindme.svg';
import React from "react";

const RemindMe =  ({ date,handleChange }:{date:string,handleChange:any}):JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [newDueDate, setNewDueDate] = useState();

    return (
        <View style={styles.container}>
        <RemindMeIcon/>
        <View style={styles.subContainer}>
            <Text style={styles.headerText}>REMIND ME</Text>
            {
                isOpen &&
                <View style={styles.updateBox}>
                     
              
                </View>
            }
            {
                !isOpen &&
                <TouchableHighlight onPress={() => {setIsOpen(true)}}>
                    <Text style={styles.subText}>{date ? date : "-"}</Text>
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
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#92929D",
    },
    subText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.1,
        color: "#44444F",
    }
});


export default RemindMe;