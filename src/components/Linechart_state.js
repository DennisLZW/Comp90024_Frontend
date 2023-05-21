import React from 'react';
import ReactECharts from 'echarts-for-react';

function convertDataToChartData(data) {
  return [
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
}

function LineChart_State({ data }) {
  const { rent_vic, rent_NT, rent_QL, rent_SA, rent_NSW, rent_TA, rent_WA } = data;

  const seriesData = [
    { name: 'VIC', data: convertDataToChartData(rent_vic), type: 'line', lineStyle: { width: 3 } },
    { name: 'NT', data: convertDataToChartData(rent_NT), type: 'line', lineStyle: { width: 3 } },
    { name: 'QL', data: convertDataToChartData(rent_QL), type: 'line', lineStyle: { width: 3 } },
    { name: 'SA', data: convertDataToChartData(rent_SA), type: 'line', lineStyle: { width: 3 } },
    { name: 'NSW', data: convertDataToChartData(rent_NSW), type: 'line', lineStyle: { width: 3 } },
    { name: 'TA', data: convertDataToChartData(rent_TA), type: 'line', lineStyle: { width: 3 } },
    { name: 'WA', data: convertDataToChartData(rent_WA), type: 'line', lineStyle: { width: 3 } },
  ];

  return (
    <ReactECharts
      style={{ height: '400px', width: '100%' }}
      option={{
        color: ['#003366', '#006699', '#4cabce', '#e5323e', '#006e6d', '#ffb248', '#219167', '#6f227f'],
        xAxis: {
          type: 'category',
          data: convertDataToChartData(rent_vic).map(item => item.name),
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
          text: 'House rental price distribution by state',
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

export default LineChart_State;
