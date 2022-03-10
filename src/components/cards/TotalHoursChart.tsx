import { Spinner, Text, View } from "native-base";
import React from "react";
import { PieChart } from 'react-native-svg-charts'

const TotalHoursChart = ({ categories, taskCategoryLoading }: { categories: any, taskCategoryLoading: boolean }): JSX.Element => {
  if (categories == undefined) {
    categories = [];
  }
  
  const data = categories.map(category => category.time)
  const colors = ['#6b89e6', '#ffc542', '#64b3eb', '#e2e2eb']
  const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: colors[index],
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }))
  const totalHours = data.reduce((sum, value) => sum + value, 0);
  return (
    <View flex="1" bg="white" p="4" mt="2" rounded="xl">
      <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="16" lineHeight="19" letterSpacing="0.5" textTransform="uppercase">TOTAL WORKING HOURS</Text>
      {(taskCategoryLoading == undefined || taskCategoryLoading) && <Spinner accessibilityLabel="Loading posts" size="lg" color="black.800" mt="3" />}
      {
        taskCategoryLoading === false && categories &&
        <View justifyContent="center">
          <PieChart style={{ height: 200 }} data={pieData} outerRadius="80%" innerRadius="90" padAngle={0} />
          <Text position="absolute" alignSelf="center" fontFamily="poppins" fontStyle="normal" fontWeight="600" fontSize="22" lineHeight="33" letterSpacing="0.11">{totalHours / 60} hrs</Text>
        </View>
      }
      <View>
        <View flexDirection="row">
          {categories && categories.length > 0 &&
            <View flexDirection="row" justifyContent="flex-start" alignItems="center" pl="4" maxWidth="1/2" width="full">
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors[0] }}></View>
              <Text fontSize="14" fontWeight="normal" fontStyle="normal" lineHeight="24" letterSpacing="0.1" pl="1">{categories[0]['categoryName']}</Text>
              <Text fontSize="14" fontStyle="normal" fontWeight="bold" lineHeight="24" left="1/2" >{categories[0]['time'] / 60} hr</Text>
            </View>}
          {categories && categories.length > 1 &&
            <View flexDirection="row" justifyContent="flex-start" alignItems="center" pl="4" maxWidth="1/2" width="full">
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors[1] }}></View>
              <Text fontSize="14" fontWeight="normal" fontStyle="normal" lineHeight="24" letterSpacing="0.1" pl="1">{categories[1]['categoryName']}</Text>
              <Text fontSize="14" fontStyle="normal" fontWeight="bold" lineHeight="24" left="1/2">{categories[1]['time'] / 60} hr</Text>
            </View>}
        </View>

        <View flexDirection="row">
          {categories && categories.length > 2 &&
            <View flexDirection="row" justifyContent="flex-start" alignItems="center" pl="4" maxWidth="1/2" width="full">
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors[2] }}></View>
              <Text fontSize="14" fontWeight="normal" fontStyle="normal" lineHeight="24" letterSpacing="0.1" pl="1">{categories[2]['categoryName']}</Text>
              <Text fontSize="14" fontStyle="normal" fontWeight="bold" lineHeight="24" left="1/2">{categories[2]['time'] / 60} hr</Text>
            </View>}
          {categories && categories.length > 3 &&
            <View flexDirection="row" justifyContent="flex-start" alignItems="center" pl="4" maxWidth="1/2" width="full">
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors[3] }}></View>
              <Text fontSize="14" fontWeight="normal" fontStyle="normal" lineHeight="24" letterSpacing="0.1" pl="1">{categories[3]['categoryName']}</Text>
              <Text fontSize="14" fontStyle="normal" fontWeight="bold" lineHeight="24" left="1/2">{categories[3]['time'] / 60} hr</Text>
            </View>}
        </View>
      </View>
    </View>
  )
}

export default TotalHoursChart;