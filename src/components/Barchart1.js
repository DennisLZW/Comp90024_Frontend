import React from 'react';
import ReactECharts from 'echarts-for-react';

function BarChart1({ data }) {
    const chartData = [
        { value: data?.fi_1_149_tot, name: '1-149$'},
        { value: data?.fi_150_299_tot, name: '150-299$' },
        { value: data?.fi_300_399_tot, name: '300-399$' },
        { value: data?.fi_400_499_tot, name: '400-499$' },
        { value: data?.fi_500_649_tot, name: '500-649$' },
        { value: data?.fi_650_799_tot, name: '650-799$'},
        { value: data?.fi_800_999_tot, name: '800-999$' },
        { value: data?.fi_1000_1249_tot, name: '1000-1249$' },
        { value: data?.fi_1250_1499_tot, name: '1250-1499$' },
        { value: data?.fi_1500_1749_tot, name: '1500-1749$' },
        { value: data?.fi_1750_1999_tot, name: '1750-1999$' },
        { value: data?.fi_2000_2499_tot, name: '2000-2499$' },
        { value: data?.fi_2500_2999_tot, name: '2500-2999$' },
        { value: data?.fi_3000_3499_tot, name: '3000-3499$' },
        { value: data?.fi_3500_3999_tot, name: '3500-3999$' },
        { value: data?.fi_4000_more_tot, name: 'over4000$' },
        { value: data?.neg_nil_inc_tot, name: 'Negative_income' },
      ];

  const colors = ['#FF5722', '#FF9800', '#FFC107', '#FFEB3B', '#CDDC39', '#8BC34A', '#4CAF50', '#009688', '#00BCD4', '#03A9F4', '#2196F3', '#3F51B5', '#673AB7', '#9C27B0', '#E91E63','FF0000','990000','9900CC'];

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
          text: 'Family income weekly',
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

export default BarChart1;
