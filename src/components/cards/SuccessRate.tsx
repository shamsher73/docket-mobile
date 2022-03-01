// import Party1 from './../../styles/assets/images/party.png';

import { StyleSheet, Text, View } from "react-native";
import Party from './../../../assets/party.svg';
import React from "react";

const SuccessRate = ({rate}:{rate:number}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>SUCCESS RATE</Text>
                <Text style={styles.rate}>{rate} %</Text>
            </View>
            <View >
                <Party style={styles.party}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 20,
        marginTop: 10,
        borderRadius: 6,
        justifyContent: "space-between",
    },
    header: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: '#171725',
    },
    party : {
        right: 1,
    },
    rate : {
        // fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 36,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: '#171725'
    }
})

export default SuccessRate;
