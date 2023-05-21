import React from 'react';
import ReactECharts from 'echarts-for-react';

function LineChart({ data }) {
  const chartData = [
    { value: data?.dec_10, name: '2010-12'},
    { value: data?.dec_11, name: '2011-12' },
    { value: data?.dec_12, name: '2012-12' },
    { value: data?.dec_13, name: '2013-13' },
    { value: data?.dec_14, name: '2014-12' },
    { value: data?.dec_15, name: '2015-12'},
    { value: data?.dec_16, name: '2016-12' },
    { value: data?.dec_17, name: '2017-12' },
    { value: data?.dec_18, name: '2018-12' },
    { value: data?.dec_19, name: '2019-12' },
  ];

  return (
    <ReactECharts
      style={{ height: '400px', width: '50%' }}
      option={{
        color: 'blue',
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
        series: [{
          data: chartData.map(item => item.value),
          type: 'line',
          lineStyle: {
            width: 3 
          }
        }],
        title: {
          text: 'Unemployment rate',
          left: 'center',
          textStyle: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
          }
        },
        legend: {
          textStyle: {
            color: 'black'
          }
        }
      }}
    />
  );
}

export default LineChart;
