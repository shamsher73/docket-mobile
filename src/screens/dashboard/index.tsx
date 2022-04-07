import React from "react";
import { View} from 'native-base';
import Analytics from "../../components/Analytics";

const Dashboard = ():JSX.Element => {
    return (
        <View>
            <Analytics title="Overview" showViewTasks={false}/>
        </View>
    );
}

export default Dashboard;