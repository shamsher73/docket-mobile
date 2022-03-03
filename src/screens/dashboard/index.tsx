import OverallPendingTask from "../../components/cards/OverallPendingTask";
import SuccessRate from "../../components/cards/SuccessRate";
import TotalHoursChart from "../../components/cards/TotalHoursChart";
import WorkingHoursChart from "../../components/cards/WorkingHoursChart";
import Filter from "../../components/Filter";
import React from "react";
import { ScrollView, Text} from 'native-base';

const Dashboard = ():JSX.Element => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const legends = ['Category 1', 'Category 2', 'More'];
    const dataset = [[10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10]];
    const filterValues = ["today", "week", "month","year","custom"];
    return (
        <ScrollView p="3">
            <Text fontStyle="normal" fontWeight="600" fontSize="20" lineHeight="30" fontFamily="Poppins">Overview</Text>
            <Filter filter="year" filterValues={filterValues} filterHandler={() => { }} />
            <TotalHoursChart categories={[{ 'name': 'Category 1', 'value': 4 }, { 'name': 'Category 2', 'value': 3 }, { 'name': 'Category 3', 'value': 2 }, { 'name': 'More', 'value': 1 }]} />
            <WorkingHoursChart labels={labels} dataset={dataset} legends={legends}/>
            <OverallPendingTask max={24} value={16} />
            <SuccessRate rate={80} />
        </ScrollView>
    );
}

export default Dashboard;