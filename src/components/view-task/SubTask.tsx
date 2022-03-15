
import CancelIcon from './../../../assets/images/close.svg';
import TagIcon from './../../../assets/images/tag.svg';
import Add from './../../../assets/images/add.svg';
import OvalIcon from './../../../assets/images/oval.svg';
import React from "react";
import { useState } from 'react';
import { Button, TouchableHighlight } from 'react-native';
import { Input, Text, View } from 'native-base';
import DatePicker from 'react-native-date-picker';

interface SubTask {
    name:string
    startTime:string
    endTime:string
}
const SubTask = ({subTasks,handleChange}:{subTasks:Array<SubTask>,handleChange:Function}):JSX.Element => {
    const [isStartOpen, setIsStartOpen] = useState(false);
    const [isEndOpen, setIsEndOpen] = useState(false);
    const [addSubtask, setAddSubtask] = useState(false);
    const [newSubtask, setNewSubtask] = useState({
                                    id:'',
                                    name:'',
                                    startTime:'01:00:00',
                                    endTime:'06:00:00',
                                    status:'pending'
                                });

    const createSubTask = ():void => {
        handleChange([...subTasks, newSubtask]);
        setAddSubtask(false)
        setNewSubtask({
            id:'',
            name:'',
            startTime:'',
            endTime:'',
            status:'pending'
        })
    }

    const removeSubTask = (subTask:SubTask) => {
        handleChange(subTasks.filter((t:SubTask) => t.name !== subTask.name));
    }

    const subTaskList =subTasks && subTasks.map((subTask:SubTask, index:number) => {
            return (
                <View key={index} flexDirection="row" alignItems="center" p="1" mr="2" justifyContent="space-between">
                    <View flexDirection="row" alignItems="center">
                        <OvalIcon />
                        <Text ml="2" fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="14" lineHeight="16" letterSpacing="0.1" color="#44444F">{subTask.name}</Text>
                    </View>
                    <View justifySelf="flex-end" mr="2" flexDirection="row" alignItems="center">
                        <Input borderWidth="1" value={subTask.startTime} p="0.5" mr="2" isDisabled></Input>
                        <Text pl="1" pr="1">-</Text>
                        <Input borderWidth="1" value={subTask.endTime} p="0.5" mr="2" isDisabled></Input>
                        <CancelIcon onPress={() => removeSubTask(subTask) } />
                    </View>
                </View>
            )   
        })

    return (
        <View flexDirection="row" borderBottomWidth="1" borderBottomColor="#E2E2EA" p="2">
            <TagIcon/>
            <View pl="4" width="full">
                <Text fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="12" lineHeight="14" color="#92929D">SUBTASK</Text>
                <View flexDirection="row" display="flex" justifyContent="flex-start">
                    {
                        addSubtask &&
                        <View flexDirection="row" alignItems="center" justifyContent="space-between" width="full">
                            <View alignItems="center" width="1/3" >
                                <Input placeholder="new subtask" borderWidth="0" borderBottomWidth="1" width="full" fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="14" lineHeight="16" letterSpacing="0.1" color="#44444F"   onChangeText={(text:string) => setNewSubtask({...newSubtask,name:text})} />
                            </View>
                            <View justifySelf="flex-end" mr="2" ml="2" flexDirection="row" alignItems="center">
                            
                            <DatePicker
                                modal
                                open={isStartOpen}
                                mode="time"
                                date={ new Date() }
                                onConfirm={(date) => {
                                    let time = date.toTimeString().split(' ')[0];
                                    setNewSubtask({...newSubtask,startTime:time})
                                    setIsStartOpen(false)
                                }}
                                onCancel={() => {
                                    setIsStartOpen(false)
                                }}
                            />
                            <DatePicker
                                modal
                                open={isEndOpen}
                                mode="time"
                                date={ new Date() }
                                onConfirm={(date) => {
                                    let time = date.toTimeString().split(' ')[0];
                                    setNewSubtask({...newSubtask,endTime:time})
                                    setIsEndOpen(false)
                                }}
                                onCancel={() => {
                                    setIsEndOpen(false)
                                }}
                            />

                                <Text fontSize="12" width="1/4" borderWidth="0.5" p="0.5" mr="2" onPress={() => setIsStartOpen(true)}>{newSubtask.startTime}</Text>
                                <Text pl="1" pr="1">-</Text>
                                <Text fontSize="12"  width="1/4" borderWidth="0.5" p="0.5" mr="2" onPress={() => setIsEndOpen(true)}>{newSubtask.endTime}</Text>
                                <Button title="Save" onPress={() => createSubTask()}/>
                            </View>
                        </View>
                    }
                    {
                        !addSubtask &&
                        <TouchableHighlight  onPress={() => setAddSubtask(true)}>
                            <View p="1" flexDirection="row" display="flex" justifyContent="flex-start" alignItems="center">
                                <Add/>
                                <Text pl="3"  fontStyle="normal" fontWeight="bold" fontSize="14" lineHeight="16" letterSpacing="0.1" color="#5F8FE3">Add Subtask</Text>
                            </View>
                        </TouchableHighlight>

                    }
                </View>
                <View>
                  {subTaskList}
                </View>
            </View>
        </View>
    );
}




export default SubTask;