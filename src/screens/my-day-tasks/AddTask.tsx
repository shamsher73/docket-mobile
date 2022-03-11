import React, { useEffect, useState } from "react";
import { Button, Modal, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import CloseModal from './../../../assets/images/close_modal.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from "react-redux";
import { taskAddRequested } from "./taskSlice";
import { View, Image, Text, Pressable, Spinner } from 'native-base';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { categoryRequested } from "./categorySlice";

const AddTask = ({ modalVisible, setModalVisible}: { modalVisible: boolean, setModalVisible: any}) => {
    const items = useSelector((state: any) => state.category.categories);
    const isLoading = useSelector((state: any) => state.category.isCategoryLoading);
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
                addToMyDay : new Date().toISOString().slice(0, 10),
            }
            dispatch(taskAddRequested(newTask));
            dispatch(categoryRequested());
            setTask('');
            setSelectedItem('');
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
            <View >
                <TouchableOpacity
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    activeOpacity={0.1}
                    onPressOut={() => setModalVisible(!modalVisible)}>
                    <View height="100%">        
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
                                            {isLoading && <Spinner accessibilityLabel="Loading categories"  size="lg" color="black.800" mt="1" />}
                                            {!isLoading && 
                                              <TouchableWithoutFeedback>
                                            <View>
                                                <SearchableDropdown
                                                onItemSelect={(item) => {
                                                    setSelectedItem(item.name)
                                                }}
                                                itemsContainerStyle={{
                                                    borderBottomWidth: 1,
                                                    borderLeftWidth: 1,
                                                    borderRightWidth: 1,
                                                    borderColor: '#E2E2EA',
                                                    borderRadius: 10,
                                                    maxHeight: 100,
                                                }}
                                                itemStyle={{
                                                    paddingTop: 6,
                                                    paddingLeft: 10,
                                                    backgroundColor: '#fff',
                                                }}
                                                itemTextStyle={{ 
                                                    color: '#44444F',
                                                    fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontSize: 12,
                                                    lineHeight: 23,
                                                    letterSpacing:0.075
                                                }}
                                                items={items}
                                                resetValue={false}
                                                textInputProps={
                                                    {
                                                        placeholder: selectedItem,
                                                        placeholderTextColor: '#000000',
                                                        underlineColorAndroid: "transparent",
                                                        style: {
                                                            paddingTop: 10,
                                                            paddingBottom: 3,
                                                            borderBottomWidth: 1,
                                                            borderColor: '#E2E2EA',
                                                            color : '#44444F',
                                                            fontFamily: 'Roboto',
                                                            fontStyle: 'normal',
                                                            fontSize: 14,
                                                            lineHeight: 16,
                                                            letterSpacing: 0.1
                                                        },
                                                        onTextChange: text => setSelectedItem(text)
                                                    }
                                                }
                                                listProps={
                                                    {
                                                        nestedScrollEnabled: true,
                                                    }
                                                }
                                                />
                                            </View>
                                            </TouchableWithoutFeedback>
                                            }
                                        </View>
                              
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <TouchableWithoutFeedback>
                        <View bottom="0" position="absolute" justifyContent="flex-end" width="100%" >
                            <Pressable onPress={() => { createTask() }}>
                                <View p="3" bg="#6895E6"  borderRadius="8" mb="6" mr="4" ml="4" alignItems="center">
                                    <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="16" lineHeight="19" color="white" textTransform="uppercase">Add Task</Text>
                                </View>
                            </Pressable>
                        </View>
                        </TouchableWithoutFeedback>
                    </View>
                   
                </TouchableOpacity>
               
            </View>
        </Modal>
    );
}

export default AddTask;