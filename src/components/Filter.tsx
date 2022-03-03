import React from "react";
import {View, Text} from 'native-base';

const Filter = ({ filterHandler, filter, filterValues }: { filterHandler: any, filter: string, filterValues: Array<string> }) => {
    const buttons = filterValues.map(value =>
        <Text fontFamily="Roboto" fontWeight="normal" fontSize="14" lineHeight="24" letterSpacing="0.1" bg={filter === value ? "#6895E6" : "white"} pl="4" pr="4" pt="2" pb="2" rounded="xl" color={filter === value ? "white" : "black"}
            onPress={() => filterHandler(value)}
            key={value}
        >
            {value.charAt(0).toUpperCase() + value.slice(1)}
        </Text>)
    return (
        <View flex="1" flexDirection="row" justifyContent="space-around" bg="white" rounded="xl" alignItems="center">
            {buttons}
        </View>
    )
}

export default Filter