import OverallPendingTask from "../../components/cards/OverallPendingTask";
import SuccessRate from "../../components/cards/SuccessRate";
import TotalHoursChart from "../../components/cards/TotalHoursChart";
import WorkingHoursChart from "../../components/cards/WorkingHoursChart";
import Filter from "../../components/Filter";
import React, { useEffect } from "react";
import { ScrollView, Text} from 'native-base';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { analyticsRequested } from "./analyticsSlice";

const Dashboard = ():JSX.Element => {

    const dispatch = useDispatch();
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const legends = ['Category 1', 'Category 2', 'More'];
    const dataset = [[10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10]];
    const filterValues = ["today", "week", "month","year","custom"];
    const [filter, setFilter] = React.useState("year");
    const taskSuccessData = useSelector((state: RootState) => state.analytics.data);
    const isLoading = useSelector((state: RootState) => state.analytics.isSuccessLoading);
    const todayDate = new Date();
    const [dateRange, setDateRange] = React.useState({
        "startDate": "",
        "endDate": ""
    });
    useEffect(() => {
        dispatch(analyticsRequested(dateRange));
        filterHandler(filter);
    }, [dispatch])

    const filterHandler = (filter: string) => {
        let startDate = new Date();
        if(filter === "month")
        {
            startDate = new Date(new Date().setMonth(new Date().getMonth() - 1))
        }
        else if(filter === "year")
        {
            startDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1))
        }
        else if(filter === "week")
        {
            startDate = new Date(new Date().setDate(new Date().getDate() - 7))          // requestAnalyticsChange(startDate, todayDate);
        }
        requestAnalyticsChange(startDate, todayDate);   
        setFilter(filter);
    }

    const requestAnalyticsChange = (startDate:Date, endDate:Date) => {
        setDateRange({
            "startDate": startDate.toISOString().split("T")[0],
            "endDate": endDate.toISOString().split("T")[0]
        });
        dispatch(analyticsRequested({"startDate":startDate.toISOString().split("T")[0],"endDate":endDate.toISOString().split("T")[0]}));
    }

    return (
        <ScrollView p="3">
            <Text fontStyle="normal" fontWeight="600" fontSize="20" lineHeight="30" fontFamily="Poppins">Overview</Text>
            <Filter filter={filter} filterValues={filterValues} filterHandler={(value) => filterHandler(value)} />
            <TotalHoursChart categories={[{ 'name': 'Category 1', 'value': 4 }, { 'name': 'Category 2', 'value': 3 }, { 'name': 'Category 3', 'value': 2 }, { 'name': 'More', 'value': 1 }]} />
            <WorkingHoursChart labels={labels} dataset={dataset} legends={legends}/>
            <OverallPendingTask 
                max={('totalTasks' in taskSuccessData) ? taskSuccessData['totalTasks'] : 1} 
                value={('completedTasks' in taskSuccessData) ? taskSuccessData['completedTasks'] : 1}  
                isLoading={isLoading}
            />
            <SuccessRate 
                rate={('successPercentage' in taskSuccessData) ? taskSuccessData['successPercentage'] : "-"} 
                isLoading={isLoading}
            />
        </ScrollView>
    );
}

export default Dashboard;