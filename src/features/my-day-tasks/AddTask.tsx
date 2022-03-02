import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from "react-native";
import CloseModal from './../../../assets/images/close_modal.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

const AddTask = ({ modalVisible, setModalVisible, taskAdded }: { modalVisible: any, setModalVisible: any, taskAdded: any }) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [items, setItems] = useState([
        { value: 'Category 1', label: 'Category 1' },
        { value: 'Category 2', label: 'Category 2' },
        { value: 'Category 3', label: 'Category 3' }
    ]);
    const dispatch = useDispatch()
    const [task, setTask] = useState('');
    const generateId = () =>
        Math.floor(Math.random() * 100000);
    const createTask = () => {
        if (selectedOption && task) {
            let newTask = {
                id: generateId(),
                task: task,
                category: selectedOption,
                description: '',
                priority: 'medium',
                subTasks: [],
                tags: [],
                time: 0,
                due_date: '',
                remind_me: '',
                repeat: '',
                status: 'pending'
            }
            dispatch(
                addTask(newTask)
            );
            taskAdded(newTask)
            setTask('');
            setSelectedOption('');
            setModalVisible(false)
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View>
                <View style={styles.modalView}>
                    <TouchableHighlight onPress={() => { setModalVisible(false) }}>
                        <CloseModal style={styles.closeModal} />
                    </TouchableHighlight>
                    <Image source={require('./../../../assets/images/user.png')} style={styles.userWithLaptop} />
                    <View style={styles.container}>
                        <Text style={styles.modalText}>My Task</Text>
                        <View style={styles.inputForm}>
                            <Text style={styles.label}>TASK</Text>
                            <TextInput style={styles.input} onChangeText={(text: string) => { setTask(text) }} />
                        </View>
                        <View style={styles.inputForm}>
                            <Text style={styles.label}>CATEGORY</Text>

                            <DropDownPicker
                                open={open}
                                value={selectedOption}
                                items={items}
                                setOpen={setOpen}
                                setValue={setSelectedOption}
                                setItems={setItems}
                            />

                        </View>
                        <TouchableHighlight onPress={() => { createTask() }} style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Add Task</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
        marginTop: '80%',
        bottom: 0,
        height: '80%',

        backgroundColor: "white",
        borderRadius: 38,
    },
    closeModal: {
        alignSelf: 'center',
        padding: 10,
    },
    userWithLaptop: {
        alignSelf: 'center',
        marginTop: 30,
    },
    modalText: {
        //fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        color: '#171725',
    },
    container: {
        padding: 20,
    },
    inputForm: {
        marginTop: 10,
        marginBottom: 10,
    },
    label: {
        //fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 14,
        color: '#92929D',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2EA',
    },
    button: {
        bottom: 0,
        borderRadius: 8,
        backgroundColor: '#6895E6',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        //fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        color: '#FAFAFB',
    }
});

export default AddTask;