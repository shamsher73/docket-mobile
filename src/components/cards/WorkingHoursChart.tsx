

import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    StackedBarChart
} from "react-native-chart-kit";
import React from "react";

function WorkingHoursChart({ labels, dataset,legends }: { labels: Array<string>, dataset: Array<Array<number>>, legends: Array<string> }) {
    const colors = ["#6b89e6", "#64b3eb", "#e2e2eb"]
    const data = {
        labels: labels,
        legend: legends,
        data: dataset,
        barColors: colors,
    };
    const screenWidth = Dimensions.get("window").width;
    return (

        <View style={styles.container}>
            <Text style={styles.header}>WORKING HOURS BREAKDOWN</Text>
            <View style={styles.legendContainer}>
                {
                    data.legend.map((legend, index) => {
                        return (
                            <View key={index} style={styles.legendCard}>
                                <View style={{width:10,height:10,borderRadius:5,backgroundColor:colors[index]}}></View>
                                <Text style={styles.legendText}>{legend}</Text>
                            </View>
                        )
                    })
                }
            </View>
            <StackedBarChart
                style={{ height: 200 }}
                data={data}
                width={screenWidth - 30}
                height={210}
                chartConfig={chartConfig}
                hideLegend={true}
            />
        </View>
    );
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
    legendContainer : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    legendText : {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.1,
        color: '#44444F',
        paddingLeft: 5,
    },
    legendCard : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});

const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `#92929D`,
    // strokeWidth: 0, // optional, default 3
    barPercentage: 0.5,
    barRadius: 0,
    useShadowColorFromDataset: false, // optional
};
export default WorkingHoursChart;