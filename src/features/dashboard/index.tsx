import { ScrollView, StyleSheet, Text, View } from "react-native";
import OverallPendingTask from "../../components/cards/OverallPendingTask";
import SuccessRate from "../../components/cards/SuccessRate";
import TotalHoursChart from "../../components/cards/TotalHoursChart";
import WorkingHoursChart from "../../components/cards/WorkingHoursChart";
import Filter from "../../components/Filter";
import React from "react";

const Dashboard = () => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const legends = ['Category 1', 'Category 2', 'More'];
    const dataset = [[10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10]];
    const filterValues = ["today", "week", "month","year","custom"];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Overview</Text>
            <Filter filter="year" filterValues={filterValues} filterHandler={() => { }} />
            <TotalHoursChart categories={[{ 'name': 'Category 1', 'value': 1 }, { 'name': 'Category 2', 'value': 1 }, { 'name': 'Category 3', 'value': 1 }, { 'name': 'More', 'value': 2 }]} />
            <WorkingHoursChart labels={labels} dataset={dataset} legends={legends}/>
            <OverallPendingTask max={24} value={16} />
            <SuccessRate rate={80} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
    },
    header: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 30,
        color: "#171725",
    }
});


export default Dashboard;