import React, { useState } from "react";
import { Modal, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import CloseModal from './../../../assets/images/close_modal.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";
import { View, Image, Text, Pressable } from 'native-base';
import { sagaActions } from "../../app/sagaActions";

const AddTask = ({ modalVisible, setModalVisible}: { modalVisible: boolean, setModalVisible: any}) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [items, setItems] = useState([
        { value: 'Category 1', label: 'Category 1' },
        { value: 'Category 2', label: 'Category 2' },
        { value: 'Category 3', label: 'Category 3' }
    ]);
    const dispatch = useDispatch()
    const [task, setTask] = useState('');

    const createTask = () => {
        if (selectedOption && task) {

            let newTask = {
                name: task,
                categoryName: selectedOption,
                addToMyDay : new Date().toISOString().slice(0, 10),
            }
            dispatch({ type: sagaActions.ADD_TASK, payload: newTask })
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
                setModalVisible(!modalVisible);
            }}>
            <View>
                <TouchableOpacity
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    activeOpacity={0.1}
                    onPressOut={() => setModalVisible(!modalVisible)}>
                    <View mt="80%" bottom="0" height="80%" bg="white" borderRadius="40">
                        <TouchableWithoutFeedback>
                            <View>
                                <TouchableHighlight onPress={() => { setModalVisible(false) }}>
                                    <CloseModal style={{ alignSelf: 'center', padding: 10 }} />
                                </TouchableHighlight>
                                <Image source={require('./../../../assets/images/user.png')} alignSelf="center" alt="user icon"/>
                                <View p="4">
                                    <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="20" lineHeight="23">My Task</Text>
                                    <View mt="4" mb="4">
                                        <Text fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="12" lineHeight="14" color="#92929D">TASK</Text>
                                        <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#E2E2EA' }} onChangeText={(text: string) => { setTask(text) }} />
                                    </View>
                                    <View mt="4" mb="4">
                                        <Text fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="12" lineHeight="14" color="#92929D">CATEGORY</Text>
                                        <DropDownPicker
                                            open={open}
                                            value={selectedOption}
                                            items={items}
                                            setOpen={setOpen}
                                            setValue={setSelectedOption}
                                            setItems={setItems}
                                            placeholder="Select Category"
                                            style={{ borderBottomWidth: 1, borderWidth: 0,  borderBottomColor: '#E2E2EA' }}
                                        />
                                    </View>
                                    <Pressable onPress={() => { createTask() }} mt="20">
                                        <View p="3" bg="#6895E6"  borderRadius="8" alignItems="center">
                                            <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="16" lineHeight="19" color="white">Add Task</Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default AddTask;