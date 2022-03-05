import { useState } from "react";
import {TouchableHighlight } from "react-native";
import Unchecked from './../../assets/images/unchecked.svg';
import Checked from './../../assets/images/checked.svg';
import React from "react";
import {View, Text} from 'native-base';

interface SubTask {
    title: string
    startTime: string
    endTime: string
    status: string
}

interface TaskState {
    id:number
    name: string
    description: string
    priority: string
    subTasks: SubTask[]
    categoryName: string | never
    tags: string[]
    time: number
    due_date: string
    remind_me: string
    repeat: string
    status: string
}

const TaskTable = ({row,handleModal}:{row:TaskState,handleModal:any}) => {
    const [selected, setSelected] = useState(false);
    return (
        <View flex="1" flexDirection="row" bg={selected ? "#F6FFFB" : "#EDF1F9"} justifyContent="space-between" p="3" mt="2" shadow="0.05">
            <TouchableHighlight onPress={() => handleModal(row)}>
                <View>
                    <Text fontFamily="Roboto" fontStyle="normal" fontSize="16" fontWeight="bold" letterSpacing="0.5">{row.name}</Text>
                    <Text fontFamily="Roboto" fontStyle="normal" fontSize="14" fontWeight="normal" letterSpacing="0.2" lineHeight="21" color="#171725">{row.categoryName}</Text>
                </View>
            </TouchableHighlight>
            <View flex="1" justifyContent="center" alignItems="flex-end" >
                <TouchableHighlight onPress={() => setSelected(!selected)} underlayColor="white">
                    {
                        selected ? <Checked /> : <Unchecked />
                    }
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default TaskTable;