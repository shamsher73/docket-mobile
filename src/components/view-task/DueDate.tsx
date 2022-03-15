
import DateIcon from './../../../assets/images/date.svg';
import React from "react";
import { View } from 'native-base';
import DateChanger from './DateChanger';

const DueDate =  ({ dueDate,handleChange }:{dueDate:string,handleChange:Function}):JSX.Element => {
    return (
        <View flex="1" flexDirection="row" borderBottomWidth="1" borderBottomColor="#E2E2EA" pt="2" pb="2">
            <View pl="3" justifyContent="center">
                <DateIcon/>
            </View>
            <DateChanger date={dueDate} changeKey="dueDate" handleChange={handleChange} title="due date" />  
        </View>
    );
}

export default DueDate;