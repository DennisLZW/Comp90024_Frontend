import React from 'react';
import ReactECharts from 'echarts-for-react';

function convertDataToChartData1(data) {
  return [
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
}

function LineChart_State_income({ data }) {
  const { income_vic, income_NT, income_QL, income_SA, income_NSW, income_TA, income_WA } = data;

  const seriesData = [
    { name: 'VIC', data: convertDataToChartData1(income_vic), type: 'line', lineStyle: { width: 3 } },
    { name: 'NT', data: convertDataToChartData1(income_NT), type: 'line', lineStyle: { width: 3 } },
    { name: 'QL', data: convertDataToChartData1(income_QL), type: 'line', lineStyle: { width: 3 } },
    { name: 'SA', data: convertDataToChartData1(income_SA), type: 'line', lineStyle: { width: 3 } },
    { name: 'NSW', data: convertDataToChartData1(income_NSW), type: 'line', lineStyle: { width: 3 } },
    { name: 'TA', data: convertDataToChartData1(income_TA), type: 'line', lineStyle: { width: 3 } },
    { name: 'WA', data: convertDataToChartData1(income_WA), type: 'line', lineStyle: { width: 3 } },
  ];

  return (
    <ReactECharts
      style={{ height: '400px', width: '100%' }}
      option={{
        color: ['#003366', '#006699', '#4cabce', '#e5323e', '#006e6d', '#ffb248', '#219167', '#6f227f'],
        xAxis: {
          type: 'category',
          data: convertDataToChartData1(income_vic).map(item => item.name),
          axisLabel: {
            rotate: 45,
            textStyle: {
              fontSize: 12,
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'gray',
            },
          },
        },
        series: seriesData,
        title: {
          text: 'Family income distribution by state',
          left: 'center',
          top: '20',
          textStyle: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
        legend: {
          data: ['VIC', 'NT', 'QL', 'SA', 'NSW', 'TA', 'WA'],
          textStyle: {
            color: 'black',
          },
        },
      }}
    />
  );
}

export default LineChart_State_income;
