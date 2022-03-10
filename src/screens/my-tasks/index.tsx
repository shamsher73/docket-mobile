import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import FilterIcon from './../../../assets/images/filter.svg';
import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import TaskTable from '../../components/TaskTable';
import Add from './../../../assets/images/addicon.svg';
import AddTask from './../my-day-tasks/AddTask';
import TaskModal from "../../components/TaskModal";
import React from "react";
import {View,HStack, ScrollView, Pressable, Text, Spinner} from 'native-base';
import { tasksRequested } from "./../my-day-tasks/taskSlice";
import FilterModal from "../../components/FilterModal";
import Error from "../../components/Error";


const MyTasks = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState(null);
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const isLoading = useSelector((state: RootState) => state.task.isLoading);
    const error = useSelector((state: RootState) => state.task.error);
    const [filter, setFilter] = useState('all');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [customFilter, setCustomFilter] = useState({
        category: '',
        due_date: '',
    });

    useEffect(() => {
        dispatch(tasksRequested({}));
    }, [dispatch])

    const openModal = (task:any) => {
        setTask(task);
        setModalVisibleEdit(true);
    }

    const changeFilter = (filter:string) => {
        setFilter(filter);
    }

    const changeCustomFilter = (key,value) => {
        setCustomFilter({
            ...customFilter,
            [key]: value
        })
    }

    const filteredListTemp = (filter === 'all') ? tasks : tasks.filter(task => task.status === filter);

    const filteredList = filteredListTemp.filter(task => {
        if(customFilter.due_date !== '' && task.dueDate.substring(0, 10) === customFilter.due_date.toISOString().split('T')[0]) {
            return task;
        }
        if(customFilter.due_date === ''){
            return task;
        }
    });
    const list = filteredList && filteredList.length > 0 ?
    filteredList.map((row: any) =>
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
                    <Pressable onPress={() => setFilterModalVisible(true)}>
                        <FilterIcon />
                    </Pressable>
                </View>
            </HStack>
            {error && <Error error={error} />}
            <ScrollView>
                {isLoading ?       
                <HStack space={2} alignContent="center" justifyContent="center" top="1/2">
                    <Spinner accessibilityLabel="Loading posts"  size="lg" color="black.800" />
                </HStack>
                : list}
            </ScrollView>
            <Pressable onPress={() => setModalVisible(true)}>
                <View position="absolute" right="5" bottom="5" width="20" height="20" bg="#6b8ae6" borderRadius="40" justifyContent="center" alignItems="center">
                    <Add />
                </View>
            </Pressable>
            <AddTask modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            <TaskModal 
                task={task}
             modalVisibleEdit={modalVisibleEdit} 
             setModalVisibleEdit={setModalVisibleEdit} 
             />
            <FilterModal modalVisible={filterModalVisible} 
                setModalVisible={setFilterModalVisible}  
                changeCustomFilter={changeCustomFilter}/>
        </View>
    )
}

export default MyTasks;
