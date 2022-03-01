import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PieChart } from 'react-native-svg-charts'

interface Category {
    name: string;
    value: number;
}
const TotalHoursChart = ({categories}:{categories:Array<Category>}):JSX.Element => {
  const data = categories.map(category => category.value)

  // const data = [50, 10, 40, 95]
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

    return (
        <View style={styles.container}>
            <View>
              <Text style={styles.header}>TOTAL WORKING HOURS</Text>
              <PieChart style={{ height: 200 }} data={pieData} outerRadius="80%" innerRadius="90" padAngle="0"/>
              <Text style={styles.chartValue}>94%</Text>
            </View>
            <View>
              <View style={styles.labelContainer}>
                {categories.length >= 0 && <View style={styles.labelHolder}><View style={{width:10,height:10,borderRadius:5,backgroundColor:colors[0]}}></View><Text style={styles.labelText}>{categories[0]['name']}</Text><Text style={styles.labelValue}>{categories[0]['value']} hr</Text></View>}
                {categories.length >= 1 && <View style={styles.labelHolder}><View style={{width:10,height:10,borderRadius:5,backgroundColor:colors[1]}}></View><Text style={styles.labelText}>{categories[1]['name']}</Text><Text style={styles.labelValue}>{categories[1]['value']} hr</Text></View>}
              </View>
              <View style={styles.labelContainer}>
                {categories.length >= 2 && <View style={styles.labelHolder}><View style={{width:10,height:10,borderRadius:5,backgroundColor:colors[2]}}></View><Text style={styles.labelText}>{categories[2]['name']}</Text><Text style={styles.labelValue}>{categories[2]['value']} hr</Text></View>}
                {categories.length >= 3 && <View style={styles.labelHolder}><View style={{width:10,height:10,borderRadius:5,backgroundColor:colors[3]}}></View><Text style={styles.labelText}>{categories[3]['name']}</Text><Text style={styles.labelValue}>{categories[3]['value']} hr</Text></View>}
              </View>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
  labelContainer: {
    display: "flex",
    flexDirection: "row",
  },
  labelHolder : {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  labelText: {
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.1,
    paddingLeft: 10,
  },
  labelValue:{
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 24,
    textAlign: "right",
    paddingLeft: 10,
  },
    container: {
        display: "flex",
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 10,
        borderRadius: 6,
    },
    chartValue: {
      position: "absolute",
      alignSelf: "center",
      bottom: 80,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: 33,
      letterSpacing: 0.11,
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

export default TotalHoursChart;