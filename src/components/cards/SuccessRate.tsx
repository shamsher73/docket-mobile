import Party from './../../../assets/images/party.svg';
import React from "react";
import {View, Text, Spinner} from 'native-base';
import { Platform } from 'react-native';

const SuccessRate = ({rate,isLoading}:{rate:string,isLoading:boolean}) => {
    return (
        <View flex="1" flexDirection="row" justifyContent="space-between" bg="white" p="4" mt="2" mb="4" rounded="xl">
            <View>
                <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="16" lineHeight="19" letterSpacing="0.5" textTransform="uppercase">SUCCESS RATE</Text>
                {isLoading && <Spinner accessibilityLabel="Loading posts"  size="lg" color="black.800" mt="1" />}
                {!isLoading &&
                    <Text fontFamily="Poppins" fontStyle="normal" fontWeight={Platform.OS === 'ios' ? "600" : "bold"} fontSize="24" lineHeight="36" letterSpacing="0.5" textTransform="uppercase">{rate}</Text>
                }
            </View>
            <View >
                <Party />
            </View>
        </View>
    )
}
export default SuccessRate;
