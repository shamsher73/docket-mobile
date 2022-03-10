import OverallPendingTask from "../../components/cards/OverallPendingTask";
import SuccessRate from "../../components/cards/SuccessRate";
import TotalHoursChart from "../../components/cards/TotalHoursChart";
import WorkingHoursChart from "../../components/cards/WorkingHoursChart";
import Filter from "../../components/Filter";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text} from 'native-base';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { analyticsCategoryRequested, analyticsRequested } from "./analyticsSlice";
import Error from "../../components/Error";
import { RefreshControl } from "react-native";

const Dashboard = ():JSX.Element => {

    const dispatch = useDispatch();
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const legends = ['Category 1', 'Category 2', 'More'];
    const dataset = [[10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10]];
    const filterValues = ["today", "week", "month","year","custom"];
    const [filter, setFilter] = React.useState("year");
    const taskSuccessData = useSelector((state: RootState) => state.analytics.data);
    const isLoading = useSelector((state: RootState) => state.analytics.isSuccessLoading);
    const error = useSelector((state: RootState) => state.analytics.error);
    const taskCategoryData = useSelector((state: RootState) => state.analytics.categoryData);
    const taskCategoryLoading = useSelector((state: RootState) => state.analytics.isCategoryLoading);

    const todayDate = new Date();
    const [dateRange, setDateRange] = React.useState({
        "startDate": "",
        "endDate": ""
    });
    useEffect(() => {
        dispatch(analyticsCategoryRequested(dateRange));
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
        dispatch(analyticsCategoryRequested({"startDate":startDate.toISOString().split("T")[0],"endDate":endDate.toISOString().split("T")[0]}))
        dispatch(analyticsRequested({"startDate":startDate.toISOString().split("T")[0],"endDate":endDate.toISOString().split("T")[0]}));
    }

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        filterHandler(filter);
        setRefreshing(false);
    }, []);
    return (
        <ScrollView p="3"
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
            {error && !isLoading && <Error error={error} />}
            <Text fontStyle="normal" fontWeight="600" fontSize="20" lineHeight="30" fontFamily="Poppins">Overview</Text>
            <Filter filter={filter} filterValues={filterValues} filterHandler={(value) => filterHandler(value)} />
            <TotalHoursChart 
                categories={taskCategoryData}
                taskCategoryLoading={taskCategoryLoading}
            />
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