import { Text, View } from "react-native"
import React from "react"
import Dashboard from "../dashboard";
import Analytics from "../../components/Analytics";
const History = () => {
    return (
        <View>
            <Analytics title="Overview" showViewTasks={true}/>
        </View>
    )
}

export default History;