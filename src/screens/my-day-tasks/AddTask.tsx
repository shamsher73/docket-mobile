import React, { useEffect, useState } from "react";
import { TextInput, TouchableHighlight } from "react-native";
import CloseModal from './../../../assets/images/close_modal.svg';
import { useDispatch } from "react-redux";
import { taskAddRequested } from "./taskSlice";
import { View, Image, Text, Pressable, Modal } from 'native-base';
import { categoryRequested } from "./categorySlice";
import CustomDropDown from "../../components/CustomDropDown";

const AddTask = ({ modalVisible, setModalVisible }: { modalVisible: boolean, setModalVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryRequested());
    }, [dispatch]);
    const [task, setTask] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const createTask = () => {
        if (selectedItem && task && selectedItem != '') {
            let newTask = {
                name: task,
                categoryName: selectedItem,
                addToMyDay: new Date().toISOString().slice(0, 10),
            }
            dispatch(taskAddRequested(newTask));
            dispatch(categoryRequested());
            setTask('');
            setSelectedItem('');
            setModalVisible(false)
        }
    }

    return (
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard size="full" animationPreset="slide" >
            <Modal.Content height="2/3" maxWidth="400px" marginBottom="0" marginTop="auto" borderTopLeftRadius="38" borderTopRightRadius="38"  borderBottomRadius="0">
                <TouchableHighlight onPress={() => { setModalVisible(false) }} >
                    <CloseModal style={{ alignSelf: 'center',padding: 10 }} />
                </TouchableHighlight>
                <Modal.Body>
                    <View>
                        <Image source={require('./../../../assets/images/user.png')} alignSelf="center" alt="user icon"/>
                    </View>
                    <View>
                        <Text fontFamily="Roboto" fontStyle="normal" fontWeight="700" fontSize="20" lineHeight="23">My Task</Text>
                    </View>
                    <View mt="4" mb="4">
                        <Text fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="12" lineHeight="14" color="#92929D" padding="0">TASK</Text>
                        <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#E2E2EA', padding: 0 }} onChangeText={(text: string) => { setTask(text) }} />
                    </View>
                    <View mt="4" mb="4">
                                <Text fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="12" lineHeight="14" color="#92929D" padding="0">CATEGORY</Text>
                                <CustomDropDown text={selectedItem} setText={setSelectedItem} />
                    </View>
                </Modal.Body>
                    <Pressable onPress={() => { createTask() }}>
                        <View bottom="0" p="3" bg="#6895E6" borderRadius="8" mb="6" mr="4" ml="4" alignItems="center">
                            <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="16" lineHeight="19" color="white" textTransform="uppercase" onPress={() => { createTask() }}>Add Task</Text>
                        </View>
                    </Pressable>
            </Modal.Content>
        </Modal>
    );
}

export default AddTask;