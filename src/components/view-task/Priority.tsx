import { StyleSheet, Text, View } from "react-native";
import PriorityIcon from './../../../assets/images/priority.svg';
import React from "react";

const Priority = ({priority,handleChange}:{priority:string,handleChange:any}) => {

    const Priorities = ["urgent","medium","low"];
    return (
        <View style={styles.container}>
            <PriorityIcon/>
            <View style={styles.subContainer}>
                <Text style={styles.headerText}>PRIORITY</Text>
                <View  style={styles.priorities}>
                {
                    Priorities.map((priorit, index) => {
                        return (
                            <Text rounded="xl" style={(priorit === priority) ? styles.subText : styles.subTextUnselected} key={index} onPress={() => handleChange('priority',priorit)}>{priorit}</Text>
                        )
                    })
                }
                </View>
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
    headerText: {
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#92929D",
    },
    subText: {
        backgroundColor: "#F1F9FF",
        borderRadius: 10,
        paddingLeft: 14,
        paddingRight: 14,
        marginLeft:2,
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 24,
        letterSpacing: 0.085,
        color: "#44444F",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    subTextUnselected: {
        backgroundColor: "#F7F7F7",
        borderRadius: 10,
        paddingLeft: 14,
        paddingRight: 14,
        marginLeft:2,
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 24,
        letterSpacing: 0.085,
        color: "#44444F",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    priorities: {
        display: "flex",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    }

});

export default Priority;