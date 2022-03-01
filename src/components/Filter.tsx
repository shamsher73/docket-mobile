import { View, Text, StyleSheet } from "react-native"
import React from "react";

const Filter = ({ filterHandler, filter, filterValues }: { filterHandler: any, filter: string, filterValues: Array<string> }) => {
    const buttons = filterValues.map(value =>
        <Text style={filter === value ? styles.selected : styles.unselected}
            onPress={() => filterHandler(value)}
            key={value}
        >
            {value.charAt(0).toUpperCase() + value.slice(1)}
        </Text>)
    return (
        <View style={styles.container}>
            {buttons}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#F1F1F5",
        borderRadius: 10,
        padding: 4,

    },
    unselected: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        color: "#000",
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.1,
    },
    selected: {
        fontWeight: "bold",
        backgroundColor: "#6895E6",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        color: "#fff",
        borderRadius: 8,
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.1,
    }
})
export default Filter