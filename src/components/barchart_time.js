import React from 'react';
import ReactECharts from 'echarts-for-react';

function BarChart1_time({ data }) {
    const chartData = [
        { value: data?.[0], name: '24:00'},
        { value: data?.[1], name: '1:00' },
        { value: data?.[2], name: '2:00' },
        { value: data?.[3], name: '3:00' },
        { value: data?.[4], name: '4:00' },
        { value: data?.[5], name: '5:00'},
        { value: data?.[6], name: '6:00' },
        { value: data?.[7], name: '7:00' },
        { value: data?.[8], name: '8:00' },
        { value: data?.[9], name: '9:00' },
        { value: data?.[10], name: '10:00' },
        { value: data?.[11], name: '11:00' },
        { value: data?.[12], name: '12:00' },
        { value: data?.[13], name: '13:00' },
        { value: data?.[14], name: '14:00' },
        { value: data?.[15], name: '15:00' },
        { value: data?.[16], name: '16:00' },
        { value: data?.[17], name: '17:00' },
        { value: data?.[18], name: '18:00' },
        { value: data?.[19], name: '19:00' },
        { value: data?.[20], name: '20:00' },
        { value: data?.[21], name: '21:00' },
        { value: data?.[22], name: '22:00' },
        { value: data?.[23], name: '23:00' },
      ];

  const colors = ['#FF5722', '#FF9800', '#FFC107', '#FFEB3B', '#CDDC39', '#8BC34A', '#4CAF50', '#009688', '#00BCD4', '#03A9F4', '#2196F3', '#3F51B5', '#673AB7', '#9C27B0', '#E91E63','FF0000','990000','9900CC'];

  return (
    <ReactECharts
      style={{ height: '200px', width: '100%' }}
      option={{
        color: colors,
        xAxis: {
          type: 'category',
          data: chartData.map(item => item.name),
          axisLabel: {
            rotate: 45,
            textStyle: {
              fontSize: 12
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'gray'
            }
          }
        },
        series: [
          {
            data: chartData.map((item, index) => ({
              value: item.value,
              itemStyle: {
                color: colors[index]
              }
            })),
            type: 'bar',
            barWidth: '60%',
          },
        ],
        title: {
          text: '24-hour tweet volume',
          left: 'center',
          textStyle: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
        legend: {
          textStyle: {
            color: 'black',
          },
        },
      }}
    />
  );
}

export default BarChart1_time;
