import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import FilterIcon from './../../../assets/images/filter.svg';
import { useState } from "react";
import Filter from "../../components/Filter";
import TaskTable from '../../components/TaskTable';
import Add from './../../../assets/images/addicon.svg';
import AddTask from './AddTask';
import TaskModal from "../../components/TaskModal";
import React from "react";
import {View,HStack, ScrollView, Pressable, Text} from 'native-base';

const MyDayTasks = ({navigation}:{navigation:any}) => {
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
            <TaskTable row={row} handleModal={openModal} key={row.id} />
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
            <Pressable onPress={() => setModalVisible(true)}>
                <View position="absolute" right="5" bottom="5" width="20" height="20" bg="#6b8ae6" borderRadius="40" justifyContent="center" alignItems="center">
                    <Add />
                </View>
            </Pressable>
            <AddTask modalVisible={modalVisible} setModalVisible={setModalVisible} taskAdded={taskAdded}/>
            <TaskModal taskTemp={task} taskUpdated={taskUpdated} modalVisibleEdit={modalVisibleEdit} setModalVisibleEdit={setModalVisibleEdit}/>
        </View>
    )
}

export default MyDayTasks;
