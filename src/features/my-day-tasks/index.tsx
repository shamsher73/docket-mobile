// import TaskTable from "../../components/table/TaskTable";
// import TaskHeader from "../../components/TaskHeader";
// import TaskCreationForm from "../../components/TaskCreationForm";
// import { useState } from "react";
// import Modal from 'react-modal';
// import TaskModal from "../../components/TaskModal";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import FilterIcon from './../../../assets/images/filter.svg';

import { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable, Alert, TouchableHighlight } from "react-native";
import Filter from "../../components/Filter";
import TaskTable from '../../components/TaskTable';
import Add from './../../../assets/images/addicon.svg';
import AddTask from './AddTask';
import TaskModal from "../../components/TaskModal";
import React from "react";

const MyDayTasks = ({navigation}) => {
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

    const closeModal = () => {
        setTask(null);
        setModalVisibleEdit(false);
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


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.filter}>
                    <Filter filter={filter} filterValues={['all','pending','completed']} filterHandler={changeFilter} />
                </View>
                <View style={styles.filterIcon}>
                    <FilterIcon />
                </View>
            </View>
            <View>
                {
                    rows && rows.length > 0 ?
                    rows.map((row:any) => {
                        return (
                            <TaskTable navigation={navigation} row={row} handleModal={openModal} key={row.id}/>
                        )
                    }):
                    <Text>No tasks found</Text>
                    

                }
            </View>
            <TouchableHighlight onPress={() => setModalVisible(true)} style={styles.add} >
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
    container:{
        display: "flex",
        padding: 10,
        height: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    filter:{
        flex: 1,
        marginRight: 10,
    },
    filterIcon: {
        padding: 10,
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 5,
    },
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
