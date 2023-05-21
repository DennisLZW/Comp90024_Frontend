import React from 'react';
import ReactECharts from 'echarts-for-react';

function BarChart({ data }) {
  const chartData = [
    { value: data?.r_0_74_tot, name: '0-74$' },
    { value: data?.r_75_99_tot, name: '75-99$' },
    { value: data?.r_100_149_tot, name: '100-149$' },
    { value: data?.r_150_199_tot, name: '150-199$' },
    { value: data?.r_200_224_tot, name: '200-224$' },
    { value: data?.r_225_274_tot, name: '225-274$' },
    { value: data?.r_275_349_tot, name: '275-349$' },
    { value: data?.r_350_449_tot, name: '350-449$' },
    { value: data?.r_450_549_tot, name: '450-549$' },
    { value: data?.r_550_649_tot, name: '550-649$' },
    { value: data?.r_650_749_tot, name: '650-749$' },
    { value: data?.r_750_849_tot, name: '750-849$' },
    { value: data?.r_850_949_tot, name: '850-949$' },
    { value: data?.r_950_over_tot, name: 'over950$' },
    
  ];

  const colors = ['#FF5722', '#FF9800', '#FFC107', '#FFEB3B', '#CDDC39', '#8BC34A', '#4CAF50', '#009688', '#00BCD4', '#03A9F4', '#2196F3', '#3F51B5', '#673AB7', '#9C27B0', '#E91E63'];

  return (
    <ReactECharts
      style={{ height: '400px', width: '50%' }}
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
          text: 'House Rental Price(per week)',
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

export default BarChart;
