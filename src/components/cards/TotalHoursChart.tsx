import { Dimensions, StyleSheet, Text, View } from "react-native";
import PieChart from 'react-native-pie-chart';
import React from "react";

interface Category {
    name: string;
    value: number;
}
const TotalHoursChart = ({categories}:{categories:Array<Category>}):JSX.Element => {
    // const values = categories.map(category => category.value);
    // const colors = ["#64B3EB","#9a45f2","#ffce73","#e2e2eb"]
    // const data = {
      
    //     datasets: [{
         
    //         data: values,
    //         backgroundColor: [
    //             'rgb(255, 206, 115)',
    //             'rgb(226, 226, 235)',
    //             'rgb(100, 179, 235)',
    //             'rgb(154, 69, 242)'
    //         ],
    //         hoverOffset: 4
    //     }]
    // }

    // const options = {
    //     maintainAspectRatio: false,
    //     responsive: true,
    //     borderRadius: {
    //         innerStart: 20,
    //         outerStart: 20,
    //     },
    //     cutout: 80,
    //     rotation: 1.25 * Math.PI,
    // }

    const widthAndHeight = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']


    return (
        <View style={styles.container}>
            <Text style={styles.header}>TOTAL WORKING HOURS</Text>
            
            {/* <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 10,
        borderRadius: 6,
     
    },
    header : {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: '#171725',
    },
});

const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }

export default TotalHoursChart;