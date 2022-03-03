import SearchIcon from './../../assets/images/search.svg';
import BellIcon from './../../assets/images/bell.svg';
import React from "react";
import {View} from 'native-base';

const HeaderRight = () => {
    return (
        <View flex="1" flexDirection="row" alignItems="center" justifyContent="space-around">
            <SearchIcon style={{marginRight:20}} />
            <BellIcon style={{marginRight:20}} />
        </View>
    );
};
export default HeaderRight;