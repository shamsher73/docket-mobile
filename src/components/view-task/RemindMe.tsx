import RemindMeIcon from './../../../assets/images/remindme.svg';
import React from "react";
import { View } from 'native-base';
import DateChanger from './DateChanger';

const RemindMe =  ({ date,handleChange }:{date:string,handleChange:Function}):JSX.Element => {
    return (
        <View flex="1" flexDirection="row" borderBottomWidth="1" borderBottomColor="#E2E2EA" pt="2" pb="2">
            <View pl="3" justifyContent="center">
                <RemindMeIcon/>
            </View>
            <DateChanger date={date} changeKey="reminderDate" handleChange={handleChange} title="remind me" />  
        </View>
    );
}

export default RemindMe;
