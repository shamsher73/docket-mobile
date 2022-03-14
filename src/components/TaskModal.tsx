import React, { useState } from "react";
import { Modal } from "react-native";
import { useDispatch } from "react-redux";
import { removeTask, taskRemoveRequested, taskUpdateRequested, updateTask } from "../screens/my-day-tasks/taskSlice";
import CloseIcon from './../../assets/images/close.svg';
import TaskTitle from "./view-task/TaskTitle";
import Description from "./view-task/Description";
import { useEffect } from "react";
import DeleteIcon from './../../assets/images/delete.svg';
import CategoryName from "./view-task/CategoryName";
import Priority from "./view-task/Priority";
import Tags from "./view-task/Tags";
import DueDate from "./view-task/DueDate";
import RemindMe from "./view-task/RemindMe";
import Repeat from "./view-task/Repeat";
import { View, Text, ScrollView, Pressable } from 'native-base';
import SubTask from "./view-task/SubTask";


const TaskModal = ({task,modalVisibleEdit,setModalVisibleEdit}:{task:any,modalVisibleEdit:any,setModalVisibleEdit:any}) => {
    const dispatch = useDispatch()
    const [taskCurrent, setTaskCurrent] = useState(task)
    useEffect(() => {
        setTaskCurrent(task);
    }, [task])
    
    const updateTag = (tags:Array<string>) => {
        const tagObject = tags.map((tag:string) => ({name:tag}))
        setTaskCurrent({...taskCurrent,tags:tagObject})
    }

    const save = () => {
        dispatch(taskUpdateRequested({...taskCurrent}))
        setModalVisibleEdit(false)
    }

    const deleteTask = () => {
        dispatch(taskRemoveRequested({id: taskCurrent.id}))
        setModalVisibleEdit(false)
    }

    const editTask = (key:string,value:string) => {
        setTaskCurrent({...taskCurrent, [key]: value})
    }

    const addSubtask = (subtasks:Array<{id:string,name:string,startTime:string,endTime:string,status:string}>) => {
        setTaskCurrent({...taskCurrent, subtasks: subtasks})
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleEdit}
            onRequestClose={() => {
                setModalVisibleEdit(!modalVisibleEdit);
            }}
        >
            {
                (taskCurrent ?
                (
                <View flex="1" bottom="0"  mt="10" borderTopLeftRadius="20">
                    <View p="4" justifyContent="space-between" flexDirection="row" borderTopLeftRadius="20" borderTopRightRadius="20" bg="white">
                        <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="18" lineHeight="21" letterSpacing="0.5" textTransform="uppercase">TASK DETAILS</Text>
                        <Pressable onPress={() => setModalVisibleEdit(!modalVisibleEdit)}>
                            <CloseIcon />
                        </Pressable>
                    </View>
                    <ScrollView height="4/5" bg="white">
                        <TaskTitle title={taskCurrent.name} handleChange={editTask}/>
                        <Description description={taskCurrent.description} handleChange={editTask}/>
                        <CategoryName category={taskCurrent.categoryName} handleChange={editTask}/>
                        <Priority priority={taskCurrent.priority} handleChange={editTask}/>
                        <Tags tags={taskCurrent.tags} handleChange={updateTag}/>
                        <SubTask subTasks={taskCurrent.subtasks} handleChange={addSubtask}/>
                        <DueDate dueDate={taskCurrent.dueDate} handleChange={editTask}/>
                        <RemindMe date={taskCurrent.reminderDate} handleChange={editTask}/>
                        <Repeat repeat={taskCurrent.repeat} handleChange={editTask}/> 
                    </ScrollView>
                    <View bg="white" flex="1" flexDirection="row" justifyContent="space-between" alignItems="center" pr="5" pl="5" shadow="6">
                        <Pressable onPress={() => deleteTask()}>
                            <DeleteIcon />
                        </Pressable>
                        <Text onPress={() => save()} p="2" pl="4" pr="4" bg="#6a8ce6" color="white" fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="14" lineHeight="16" letterSpacing="0.1" rounded="xl">Save</Text>
                    </View>
                </View>)
            :
            (<View flex="1" bottom="0"  mt="10" borderTopLeftRadius="20">
                <Text>Loading</Text>
            </View>)
                )
            }
          
        </Modal>
    );
}

export default TaskModal;