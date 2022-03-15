
import { StyleSheet, Text, View } from 'react-native';
import RepeatIcon from './../../../assets/images/repeat.svg';
import React from "react";
import ModalDropdown from 'react-native-modal-dropdown';


const Repeat = ({ repeat,handleChange }:{repeat:string,handleChange:Function}) => {
    const RepeatOptions = ["daily","weekly","monthly","yearly"];

    const setSelectedValue = (index:number) => {
        handleChange('repeat',RepeatOptions[index])
    }
    return (
        <View style={styles.container}>
            <RepeatIcon/>
            <View style={styles.subContainer}>
                <Text style={styles.headerText}>REPEAT</Text>
                <View style={styles.updateBox}>
                    <ModalDropdown textStyle={{fontSize:14}} dropdownStyle={{paddingLeft:30,paddingRight:30}} style={{ width:100}} options={RepeatOptions} defaultValue={repeat} onSelect={(index:number) => setSelectedValue(index)} />
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
    updateBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontColor: "#44444F",
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

export default Repeat;