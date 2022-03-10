import React from "react";
import { Text, View } from "native-base"
import { useState } from "react";
import { TouchableHighlight } from "react-native"
import DatePicker from "react-native-date-picker";

const DateChanger = ({date,changeKey,handleChange,title}:{date:string,changeKey:string,handleChange:any,title:string}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View flex="1" pl="3">
                <Text fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="12" lineHeight="14" color="#92929D" textTransform="uppercase">{title}</Text>
                {
                    isOpen &&
                    <View>
                       <DatePicker
                            modal
                            open={isOpen}
                            mode="date"
                            date={ date ? new Date(date) : new Date() }
                            onConfirm={(date) => {
                                let dateFormat = (date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' + date.getFullYear()
                                handleChange(changeKey,dateFormat)
                                setIsOpen(false)
                            }}
                            onCancel={() => {
                                setIsOpen(false)
                            }}
                        />
                    </View>
                }
                {
                    !isOpen &&
                    <TouchableHighlight onPress={() => {setIsOpen(true)}}>
                        <Text pt="2" fontFamily="Roboto" fontStyle="normal" fontWeight="normal" fontSize="14" lineHeight="16" letterSpacing="0.1">{date ? date : "-"}</Text>
                    </TouchableHighlight>
                }
            </View> 
    )
}

export default DateChanger;