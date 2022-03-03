import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import FilterIcon from './../../../assets/images/filter.svg';
import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import Filter from "../../components/Filter";
import TaskTable from '../../components/TaskTable';
import Add from './../../../assets/images/addicon.svg';
import AddTask from './AddTask';
import TaskModal from "../../components/TaskModal";
import React from "react";
import {View,HStack, ScrollView} from 'native-base';

const MyDayTasks = ({navigation}:{navigation:any}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [task, setTask] = useState(null);
    const [allTasks, setAllTasks] = useState(useSelector((state: RootState) => state.task));
    const [rows, setRows] = useState(allTasks);
    const [filter, setFilter] = useState('all');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleEdit, setModalVisibleEdit] = useState(false);

    const openModal = (task:any) => {
        setTask(task);
        setModalVisibleEdit(true);
    }

    const changeFilter = (filter:string) => {
        setFilter(filter);
        if(filter === 'all') {
            setRows(allTasks);
        } else if(filter === 'pending') {
            setRows(allTasks.filter(task => task.status === 'pending'));
        } else if(filter === 'completed') {
            setRows(allTasks.filter(task => task.status === 'completed'));
        }
    }

    const taskAdded = (task:any) => {
        setAllTasks([...allTasks, task]);
        setRows([...rows, task]);
    }

    const taskUpdated = (task:any) => {
        const index = allTasks.findIndex(t => t.id === task.id);
        setAllTasks([...allTasks.slice(0, index), task, ...allTasks.slice(index + 1)]);
        setRows([...rows.slice(0, index), task, ...rows.slice(index + 1)]);
    }

    const list = rows && rows.length > 0 ?
        rows.map((row: any) =>
            <TaskTable navigation={navigation} row={row} handleModal={openModal} key={row.id} />
        ) :
        <Text>No tasks found</Text>

    return (
        <View p="3" flex="1">
            <HStack>
                <View flex="1">
                    <Filter filter={filter} filterValues={['all','pending','completed']} filterHandler={changeFilter} />
                </View>
                <View justifyContent="center" bg="white" rounded="xl" p="3" ml="1">
                    <FilterIcon />
                </View>
            </HStack>
            <ScrollView>
                {list}
            </ScrollView>
            <TouchableHighlight onPress={() => setModalVisible(true)} style={styles.add}>
                <View>
                    <Add />
                </View>
            </TouchableHighlight>
            <AddTask modalVisible={modalVisible} setModalVisible={setModalVisible} taskAdded={taskAdded}/>
            <TaskModal taskTemp={task} taskUpdated={taskUpdated} modalVisibleEdit={modalVisibleEdit} setModalVisibleEdit={setModalVisibleEdit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    add: {
        position: "absolute",
        right: 10,
        bottom: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#6b8ae6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
})

export default MyDayTasks;
