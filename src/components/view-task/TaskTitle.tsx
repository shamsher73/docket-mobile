import OvalIcon from './../../../assets/images/oval.svg';
import React from "react";
import { View } from 'native-base';
import TextChanger from './TextChanger';

const TaskTitle = ({ title, handleChange }: { title: string, handleChange: any }) => {
    return (
        <View flex="1" flexDirection="row" borderBottomWidth="1" borderBottomColor="#E2E2EA" pt="2" pb="2">
            <View pl="3" justifyContent="center">
                <OvalIcon />
            </View>
            <TextChanger value={title} changeKey="" handleChange={handleChange} title="" />
        </View>
    );
}
export default TaskTitle;