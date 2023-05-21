import React from 'react';
import ReactECharts from 'echarts-for-react';

function HeatmapChart({ data }) {
  const chartData = [
    { value: [0, 0, data?.dec_10], name: '2010-12'},
    { value: [0, 1, data?.dec_11], name: '2011-12' },
    { value: [0, 2, data?.dec_12], name: '2012-12' },
    { value: [0, 3, data?.dec_13], name: '2013-12' },
    { value: [0, 4, data?.dec_14], name: '2014-12' },
    { value: [0, 5, data?.dec_15], name: '2015-12'},
    { value: [0, 6, data?.dec_16], name: '2016-12' },
    { value: [0, 7, data?.dec_17], name: '2017-12' },
    { value: [0, 8, data?.dec_18], name: '2018-12' },
    { value: [0, 9, data?.dec_19], name: '2019-12' },
  ];

  return (
    <ReactECharts
      style={{ height: '300px', width: '100%' }}
      option={{
        title: {
            text: 'Unemployment Rate by Year',
            left: 'center',
            textStyle: {
              color: '#333333',
              fontSize: 16,
              fontWeight: 'bold',
            },
          },
        color: '#005bac',
        tooltip: {},
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'right',
          bottom: '15%',
        },
        series: [
          {
            name: 'Ratio of Unemployment',
            type: 'heatmap',
            data: chartData,
            label: {
              show: true,
              color: '#ffffff',
              fontSize: 12,
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
        xAxis: {
          type: 'category',
          data: ['Year'],
          axisLabel: {
            color: '#333333',
          },
        },
        yAxis: {
          type: 'category',
          data: chartData.map(item => item.name),
          axisLabel: {
            color: '#333333',
            fontSize: 12,
          },
        },
      }}
    />
  );
}

export default HeatmapChart;
