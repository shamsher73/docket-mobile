import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import FilterIcon from './../../assets/images/filter.svg';
import { useCallback, useEffect, useState } from "react";
import Filter from "./Filter";
import TaskTable from './TaskTable';
import Add from './../../assets/images/addicon.svg';
import React from "react";
import { View, HStack, ScrollView, Pressable, Text, Spinner } from 'native-base';
import FilterModal from "./FilterModal";
import Error from "./Error";
import { RefreshControl,TouchableHighlight } from "react-native";
import { taskMarkCompleteRequested, tasksRequested, TaskState } from "../screens/my-day-tasks/taskSlice";
import TaskModal from "./TaskModal";
import AddTask from "../screens/my-day-tasks/AddTask";

const TasksView = ({ filterByDueDate,showAddoption,dates }: { filterByDueDate: boolean,showAddoption:boolean,dates:{startDate:Date,endDate:Date} }) => {
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

    const openModal = (task: any) => {
        setTask(task);
        setModalVisibleEdit(true);
    }

    const changeFilter = (filter: string) => {
        setFilter(filter);
    }

    const changeCustomFilter = (key:string, value:string) => {
        setCustomFilter({
            ...customFilter,
            [key]: value
        })
    }

    const filteredListTemp = (filter === 'all') ? tasks : tasks.filter((task:TaskState) => task.status === filter);
    const filteredList = (filterByDueDate) ? 
    filteredListTemp.filter((task:TaskState) => (
        task.dueDate.substring(0, 10) >= dates.startDate.toISOString().split('T')[0] && 
        task.dueDate.substring(0, 10) <= dates.endDate.toISOString().split('T')[0]
        )) 
    : filteredListTemp;

    const toggleStatus = (task:TaskState) => {
        dispatch(taskMarkCompleteRequested({ id: task.id, status: task.status === 'completed' ? 'pending' : 'completed' }));
    }

    const list = filteredList && filteredList.length > 0 ?
        filteredList.map((row: TaskState) =>
            <TaskTable row={row} handleModal={openModal} key={row.id} toggleStatus={toggleStatus} />
        ) :
        <Text>No tasks found</Text>


    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(tasksRequested({}));
        setRefreshing(false);
    }, []);


    return (
        <View p="3" flex="1">
       
            <HStack>
                <View flex="1" >
                    <Filter filter={filter} filterValues={['all', 'pending', 'completed']} filterHandler={changeFilter} />
                </View>
                <View justifyContent="center" bg="white" rounded="xl" p="3" ml="1">
                    <Pressable onPress={() => setFilterModalVisible(true)}>
                        <FilterIcon />
                    </Pressable>
                </View>
            </HStack>
            {error && <Error error={error} />}
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }

            >
                {isLoading ?
                    <HStack space={2} alignContent="center" justifyContent="center" top="1/2">
                        <Spinner accessibilityLabel="Loading posts" size="lg" color="black.800" />
                    </HStack>
                    : list}
            </ScrollView>
            {showAddoption &&
                  <TouchableHighlight onPress={() => setModalVisible(true)} >
                  <View position="absolute" right="5" bottom="5" width="20" height="20" bg="#6b8ae6" borderRadius="40" justifyContent="center" alignItems="center">
                      <Add onPress={() => setModalVisible(true)} />
                  </View>
              </TouchableHighlight>
            }
      
            <AddTask modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <TaskModal
                task={task}
                modalVisibleEdit={modalVisibleEdit}
                setModalVisibleEdit={setModalVisibleEdit}
            />
            <FilterModal modalVisible={filterModalVisible}
                setModalVisible={setFilterModalVisible}
                changeCustomFilter={changeCustomFilter} />
        </View>
    )
}

export default TasksView;