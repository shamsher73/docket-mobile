import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Unchecked from './../../assets/images/unchecked.svg';
import Checked from './../../assets/images/checked.svg';
import React from "react";
interface SubTask {
    title: string
    startTime: string
    endTime: string
    status: string
}

interface TaskState {
    id:number
    task: string
    description: string
    priority: string
    subTasks: SubTask[]
    category: string | never
    tags: string[]
    time: number
    due_date: string
    remind_me: string
    repeat: string
    status: string
}

const TaskTable = ({navigation,row,handleModal}:{navigation:any,row:TaskState,handleModal:any}) => {
    const [selected, setSelected] = useState(false);
    const onPressButto = () => {
        setSelected(!selected);
    }

    return (
        <View style={selected ? styles.containerSelected : styles.container }>
            <TouchableHighlight onPress={() =>
                        handleModal(row)
                    }
            >
                <View>
                    <Text style={styles.taskText}>{row.task}</Text>
                    <Text style={styles.taskCategory}>{row.category}</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.selector}>
                <TouchableHighlight onPress={() => onPressButto()} underlayColor="white">
                    {
                        selected ? <Checked /> : <Unchecked />
                    }
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#EDF1F9",
        borderWidth: 1,
        borderColor: "#EDF1F9",
        borderRadius: 6,
        padding: 12,
        marginTop: 5,
    },
    containerSelected: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F6FFFB",
        borderWidth: 1,
        borderColor: "#F6FFFB",
        borderRadius: 6,
        padding: 12,
        marginTop: 5,
    },
    taskText: {
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.5,
        color: "#171725",
    },
    taskCategory: {
        // fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.2,
        color: "#171725",
    },
    selector: {
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
    }
})

export default TaskTable;