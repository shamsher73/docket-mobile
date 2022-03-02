import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from "react-native";
import CloseModal from './../../assets/images/close_modal.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from "react-redux";
import { removeTask, updateTask } from "../features/my-day-tasks/taskSlice";
import CloseIcon from './../../assets/images/close.svg';
import TaskTitle from "./view-task/TaskTitle";
import { logger } from "react-native-logs";
import Description from "./view-task/Description";
import { useEffect } from "react";
import DeleteIcon from './../../assets/images/delete.svg';
import CategoryName from "./view-task/CategoryName";
import Priority from "./view-task/Priority";
import Tags from "./view-task/Tags";
import DueDate from "./view-task/DueDate";
import RemindMe from "./view-task/RemindMe";
import Repeat from "./view-task/Repeat";


const TaskModal = ({taskTemp,taskUpdated,modalVisibleEdit,setModalVisibleEdit}:{taskTemp:any,taskUpdated:any,modalVisibleEdit:any,setModalVisibleEdit:any}) => {
    const dispatch = useDispatch()
    // const tempTask = useSelector((state:any) => state.task.find((task:any) => task.id === taskId))
    const [taskCurrent, setTaskCurrent] = useState(taskTemp)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setTaskCurrent(taskTemp)
        setLoad(true)
    }, [taskTemp])


    const updateTag = (tags:Array<string>) => {
        setTaskCurrent({...taskCurrent, tags: tags})
    }

    const save = () => {
        taskUpdated(taskCurrent)
        dispatch(updateTask({...taskCurrent}))
        setModalVisibleEdit(false)
    }

    const deleteTask = () => {
        dispatch(removeTask({id : taskCurrent.id}))
        setModalVisibleEdit(false)
    }

    const editTask = (key:string,value:string) => {
        setTaskCurrent({...taskCurrent, [key]: value})
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleEdit}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisibleEdit(!modalVisibleEdit);
            }}
        >
            {
                (load && taskCurrent ?
(
                <View style={styles.modalView}>
            
                <View style={styles.header}>
                        <Text style={styles.headerText}>TASK DETAILS</Text>
                        <View>
                            <CloseIcon onPress={() =>
                            setModalVisibleEdit(false) 
                            }/>
                        </View>   
                        
                </View>
        
                <TaskTitle title={taskCurrent.task} handleChange={() => {}}/>
                <Description description={taskCurrent.description} handleChange={editTask}/>
                <CategoryName category={taskCurrent.category} handleChange={editTask}/>
                <Priority priority={taskCurrent.priority} />
                <Tags tags={taskCurrent.tags} handleChange={updateTag}/>
                <DueDate dueDate={taskCurrent.due_date} handleChange={() => {}}/>
                <RemindMe date={taskCurrent.remind_me} handleChange={() => {}}/>
                <Repeat repeat={taskCurrent.repeat} handleChange={() => {}}/> 

                <View style={styles.footer}>
                    <DeleteIcon onPress={() => deleteTask()}/>
                    <Text style={styles.save} onPress={() => save()}>Save</Text>
                </View>
            </View>)
            :
            (<View style={styles.modalView}>
                <Text>Loading</Text>
            </View>)
                )
            }
          
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        flexDirection: "column",
        height: '100%',
        paddingTop: 30,
        padding:20,
        backgroundColor: "white",
        borderRadius: 38,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    headerText: {
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: "#171725",
    },
    footer:{
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: '#E6E6F0',
        paddingTop: 5,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 10,
        //     height: 10,

        // },
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    save: {
        borderRadius: 6,
        backgroundColor: "#6a8ce6",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.1,
        color: "#FAFAFB",
    }
});

export default TaskModal;