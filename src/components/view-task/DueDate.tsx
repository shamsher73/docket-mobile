
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import DateIcon from './../../../assets/date.svg';
import React from "react";
// import DatePicker from 'react-native-datepicker'

const DueDate =  ({ dueDate,handleChange }:{dueDate:string,handleChange:any}):JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [newDueDate, setNewDueDate] = useState('');

    return (
        <View style={styles.container}>
        <DateIcon/>
        <View style={styles.subContainer}>
            <Text style={styles.headerText}>DUE DATE</Text>
            {
                isOpen &&
                <View style={styles.updateBox}>
                                            <Button title="Update" onPress={() => {handleChange('due-date',newDueDate);setIsOpen(false)}}/>

                          {/* <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      /> */}
              
                </View>
            }
            {
                !isOpen &&
                <TouchableHighlight onPress={() => {setIsOpen(true)}}>
                    <Text style={styles.subText}>{dueDate ? dueDate : "-"}</Text>
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


export default DueDate;