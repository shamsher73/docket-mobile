import { Spinner, Text, View } from "native-base";
import React from "react";
import { PieChart } from 'react-native-svg-charts'
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface CategoryType {
  categoryName: string,
  time: number,
  id: number
}
const colors = ['#6b89e6', '#ffc542', '#64b3eb', '#e2e2eb']
const TotalHoursChart = (): JSX.Element => {
  const taskCategoryData = useSelector((state: RootState) => state.analytics.categoryData);
  const taskCategoryLoading = useSelector((state: RootState) => state.analytics.isCategoryLoading);
  const labelList = taskCategoryData && taskCategoryData.map((category: CategoryType,index:number) => {
    if((index%2) === 0 && index < taskCategoryData.length-1)
    {
      return (
        <View flexDirection="row">
        {taskCategoryData && taskCategoryData.length > index && <Legend index={index} taskCategoryData={taskCategoryData} />}
        {taskCategoryData && taskCategoryData.length > index+1 && <Legend index={index+1} taskCategoryData={taskCategoryData} />}
        </View>
      )
    }
  });
  const data = taskCategoryData ? taskCategoryData.map((category:CategoryType) => category.time) : [];
  const pieData = data
    .map((value:number, index:number) => ({
      value,
      svg: {
        fill: colors[index]
      },
      key: `pie-${index}`,
    }))
  const totalHours = data.reduce((sum:number, value:number) => sum + value, 0);

  return (
    <View flex="1" bg="white" p="4" mt="2" rounded="xl">
      <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="16" lineHeight="19" letterSpacing="0.5" textTransform="uppercase">TOTAL WORKING HOURS</Text>
      {(taskCategoryLoading == undefined || taskCategoryLoading) && <Spinner accessibilityLabel="Loading posts" size="lg" color="black.800" mt="3" />}
      {
        taskCategoryLoading === false && data &&
        <View justifyContent="center">
          <PieChart style={{ height: 200 }} data={pieData} outerRadius="80%" innerRadius="90" padAngle={0} />
          <Text position="absolute" alignSelf="center" fontFamily="poppins" fontStyle="normal" fontWeight="600" fontSize="22" lineHeight="33" letterSpacing="0.11">{totalHours / 60} hrs</Text>
        </View>
      }
      <View>
        {labelList}
      </View>
    </View>
  )
}

const Legend = ({index,taskCategoryData}:{index:number,taskCategoryData:Array<CategoryType>}) => { 
  return (
    <View flexDirection="row" justifyContent="flex-start" alignItems="center" pl="4" maxWidth="1/2" width="full">
      <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors[index] }}></View>
      <View flexDirection="row" justifyContent="space-between" flex="1">
        <Text fontSize="14" fontWeight="normal" fontStyle="normal" lineHeight="24" letterSpacing="0.1" pl="1">{taskCategoryData[index]['categoryName']}</Text>
        <Text fontSize="14" fontStyle="normal" fontWeight="bold" lineHeight="24">{taskCategoryData[index]['time'] / 60} hr</Text>
      </View>
    </View>
  )
}

export default TotalHoursChart;