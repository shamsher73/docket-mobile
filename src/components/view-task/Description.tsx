
import DescriptionIcon from './../../../assets/images/description.svg';
import React from "react";
import { View } from 'native-base';
import TextChanger from './TextChanger';

const Description = ({ description, handleChange }: { description: string, handleChange: any }) => {
    return (
        <View flex="1" flexDirection="row" borderBottomWidth="1" borderBottomColor="#E2E2EA" pt="2" pb="2">
            <View pl="3" justifyContent="center">
                <DescriptionIcon />
            </View>
            <TextChanger value={description} changeKey="description" handleChange={handleChange} title="description"/>
        </View>
    );
}

export default Description;