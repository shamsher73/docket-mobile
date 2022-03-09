import { Button, Pressable, Text, View } from "native-base";
import { Modal, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import CloseIcon from './../../assets/images/close.svg';
import DatePicker from "react-native-date-picker";



const FilterModal = ({ modalVisible, setModalVisible, changeCustomFilter }: {
    modalVisible: boolean, setModalVisible: any,
     changeCustomFilter: any
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View height="100%" bottom="0" top="40">
                <TouchableOpacity
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    activeOpacity={0.1}
                    onPressOut={() => setModalVisible(!modalVisible)}
                >
                    <View mt="1/2" bg="white" mb="full" rounded="xl" m="4">
                        <TouchableWithoutFeedback>
                            <View>
                                <View justifyContent="space-between" flexDirection="row" margin="2">

                                    <View>
                                        <Text color="black" fontStyle="normal" fontWeight="500" fontFamily="Poppins" fontSize="16">Filter using below options</Text>
                                    </View>

                                    <View justifyContent="center">
                                        <TouchableHighlight onPress={() => { setModalVisible(false) }}>
                                            <CloseIcon />
                                        </TouchableHighlight>
                                    </View>
                                </View>

                                <View justifyContent="space-between" marginLeft="4">
                                    <View flexDirection="row" alignItems="center">
                                        <View>
                                            <Text >Due Date: </Text>
                                        </View>


                                        <DatePicker
                                            modal
                                            open={isOpen}
                                            mode="date"
                                            date={new Date()}
                                            onConfirm={(date) => {
                                                setDate(date)
                                                changeCustomFilter('due_date', date)
                                                setIsOpen(false)
                                            }}
                                            onCancel={() => {
                                                setIsOpen(false)
                                            }}

                                        />

                                        {
                                            !isOpen &&
                                            <Pressable onPress={() => { setIsOpen(true) }}>
                                                <Text borderWidth="0.5" p="0.5">{date.toDateString()}</Text>
                                            </Pressable>
                                        }
                                    </View>

                                </View>
                                <View flexDirection="row" justifyContent="space-around" p="2">
                                    <Button onPress={() => {changeCustomFilter('due_date', '');setModalVisible(false)}} bg="warning.400" pl="6" pr="6">Clear</Button>
                                    <Button onPress={() => setModalVisible(false)} bg="success.400" pl="6" pr="6">Filter</Button>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default FilterModal;