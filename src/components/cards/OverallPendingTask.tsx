import { Dimensions, StyleSheet, Text, View } from "react-native";
import * as Progress from 'react-native-progress';
import React from "react";

const OverallPendingTask = ({max,value}:{max:number,value:number}) => {
    const progressValue = value/max;
    const screenWidth = Dimensions.get("window").width;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>OVERALL PENDING TASK</Text>
            <Text style={styles.valueText}>{value}/{max}</Text>
            <Progress.Bar 
            progress={progressValue} 
            width={screenWidth - 60} 
            borderWidth = {0}
            height={18} 
            borderRadius={16} 
            unfilledColor="rgba(100, 179, 235, 0.28)"
            color="rgb(100, 179, 235)"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#fff",
        padding: 20,
        marginTop: 10,
        borderRadius: 6,
     
    },
    header : {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: '#171725',
    },
    valueText : {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: '#92929D',
        alignSelf: "flex-end",
    }

});

export default OverallPendingTask;
