import Party from './../../../assets/images/party.svg';
import React from "react";
import {View, Text} from 'native-base';

const SuccessRate = ({rate}:{rate:number}) => {
    return (
        <View flex="1" flexDirection="row" justifyContent="space-between" bg="white" p="4" mt="2" rounded="xl">
            <View>
                <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="16" lineHeight="19" letterSpacing="0.5" textTransform="uppercase">SUCCESS RATE</Text>
                <Text fontFamily="Poppins" fontStyle="normal" fontWeight="normal" fontSize="24" lineHeight="36" letterSpacing="0.5" textTransform="uppercase">{rate} %</Text>
            </View>
            <View >
                <Party />
            </View>
        </View>
    )
}
export default SuccessRate;
