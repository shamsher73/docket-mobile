import { Button, Center, Pressable, Text, View } from "native-base";
import React from "react";
import { Modal } from "react-native";
import TasksView from "./TasksView";
import CloseIcon from './../../assets/images/close.svg';

const ViewTasksModal = ({showModal,setShowModal,dates}:{showModal:boolean,setShowModal:React.Dispatch<React.SetStateAction<boolean>>,dates:{startDate:Date,endDate:Date}}) => {
    return (

        <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
            setShowModal(!showModal);
        }}
    >
        <View bg="white" mt="10" rounded="xl">
            <View height="100%">
                <View p="4" justifyContent="space-between" flexDirection="row" borderTopLeftRadius="20" borderTopRightRadius="20" bg="white">
                    <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="18" lineHeight="21" letterSpacing="0.5" textTransform="uppercase">TASK DETAILS</Text>
                    <Pressable onPress={() => setShowModal(false)}>
                        <CloseIcon />
                    </Pressable>
                </View>
                <TasksView filterByDueDate={true} showAddoption={false} dates={dates}/>
            </View>
        </View>
      </Modal>
  
    )
}

export default ViewTasksModal;