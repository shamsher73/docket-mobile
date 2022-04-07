

import React, { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View} from 'native-base';
import { useDispatch, useSelector } from "react-redux";

import { Platform, RefreshControl } from "react-native";
import { RootState } from "../app/store";
import { analyticsCategoryRequested, analyticsRequested } from "../screens/dashboard/analyticsSlice";
import Error from "./Error";
import Filter from "./Filter";
import TotalHoursChart from "./cards/TotalHoursChart";
import WorkingHoursChart from "./cards/WorkingHoursChart";
import OverallPendingTask from "./cards/OverallPendingTask";
import SuccessRate from "./cards/SuccessRate";
import ViewTasksModal from "./ViewTasksModal";

const Analytics = ({title,showViewTasks}:{title:string,showViewTasks:boolean}):JSX.Element => {
    const dispatch = useDispatch();
    const filterValues = ["today", "week", "month","year","custom"];
    const [filter, setFilter] = useState("year");

    const taskSuccessData = useSelector((state: RootState) => state.analytics.data);
    const isLoading = useSelector((state: RootState) => state.analytics.isSuccessLoading);
    const error = useSelector((state: RootState) => state.analytics.error);
    const [showModal, setShowModal] = useState(false);
    const [dates, setDates] = useState({startDate:new Date(),endDate:new Date()});

    useEffect(() => {
        filterHandler(filter);
    }, [])

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
            startDate = new Date(new Date().setDate(new Date().getDate() - 7)) 
        }

        requestAnalyticsChange(startDate, new Date());   
        setDates({startDate,endDate:new Date()});
        setFilter(filter);
    }

    const requestAnalyticsChange = (startDate:Date, endDate:Date) => {
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
        <View height="full">
            <View height="full">
                <ScrollView p="3"
                refreshControl={
                    <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    />
                }
                >
                    {error && !isLoading && <Error error={error} />}
                    <Text fontFamily="Poppins" fontStyle="normal" fontWeight={Platform.OS === 'ios' ? "600" : "bold"} fontSize="20" lineHeight="30" >{title}</Text>
                    <Filter filter={filter} filterValues={filterValues} filterHandler={(value) => filterHandler(value)} />
                    <TotalHoursChart />
                    {/* <WorkingHoursChart labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}  legends={['Category 1', 'Category 2', 'More']} dataset={[[10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10], [10, 40,50], [10, 10, 10], [10, 20, 10]]}/> */}
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
                {showViewTasks && 
                <Pressable onPress={() => { setShowModal(true) }}>
                    <View bottom="0" p="3" bg="#6895E6" borderRadius="8" mb="6" mr="4" ml="4" alignItems="center">
                        <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="16" lineHeight="19" color="white" textTransform="uppercase" onPress={() => {setShowModal(true) }}>View Tasks</Text>
                    </View>
                </Pressable>
                }
                
            </View>
            <View> 
                <ViewTasksModal dates={dates} showModal={showModal} setShowModal={setShowModal}/>
            </View>
        </View>
      
        
    );
}

export default Analytics;