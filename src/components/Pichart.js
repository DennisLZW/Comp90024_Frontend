import React from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

function PieChart({ data }) {


    const chartData = [
    { value: data?.m_0_149_tot, name: '0-149$', itemStyle: { color: '#FF0000' } },
    { value: data?.m_150_299_tot, name: '150-299$', itemStyle: { color: '#00FF00' } },
    { value: data?.m_300_449_tot, name: '300-449$', itemStyle: { color: '#0000FF' } },
    { value: data?.m_450_599_tot, name: '450-599$', itemStyle: { color: '#FF00FF' } },
    { value: data?.m_600_799_tot, name: '600-799$', itemStyle: { color: '#FFFF00' } },
    { value: data?.m_800_999_tot, name: '800-999$', itemStyle: { color: '#00FFFF' } },
    { value: data?.m_1000_1199_tot, name: '1000-1199$', itemStyle: { color: '#FF9900' } },
    { value: data?.m_1200_1399_tot, name: '1200-1399$', itemStyle: { color: '#9900FF' } },
    { value: data?.m_1400_1599_tot, name: '1400-1599$', itemStyle: { color: '#00FF99' } },
    { value: data?.m_1600_1799_tot, name: '1600-1799$', itemStyle: { color: '#990000' } },
    { value: data?.m_1800_1999_tot, name: '1800-1999$', itemStyle: { color: '#009900' } },
    { value: data?.m_2000_2199_tot, name: '2000-2199$', itemStyle: { color: '#000099' } },
    { value: data?.m_2200_2399_tot, name: '2200-2399$', itemStyle: { color: '#990099' } },
    { value: data?.m_2400_2599_tot, name: '2400-2599$', itemStyle: { color: '#999900' } },
    { value: data?.m_2600_2999_tot, name: '2600-2999$', itemStyle: { color: '#009999' } },
    { value: data?.m_3000_3999_tot, name: '3000-3999$', itemStyle: { color: '#9900CC' } },
    { value: data?.m_4000_4999_tot, name: '4000-4999$', itemStyle: { color: '#CC0099' } },
    { value: data?.m_5000over_tot, name: 'over5000$', itemStyle: { color: '#FFCC00' } },
    
  ];

  return (
    <ReactECharts
      style={{ height: '300px', width: '100%' }}
      option={{
        title: {
            text: 'Deposit for house',
            left: 'center',
            textStyle: {
              fontSize: 16,
              fontWeight: 'bold',
              color: '#333',
            },
          },

        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)',
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['40%', '50%'],
            animation: true,
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return idx * 100;
            },
            label: {
              show: true,
              formatter: '{b} ({d}%)',
              fontSize: 14,
              fontWeight: 'bold',
              color: '#333',
            },
            labelLine: {
              show: true,
              length: 5,
              length2: 5,
              lineStyle: {
                color: '#999',
              },
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: '#FFF',
            },
            data: chartData,
          },
        ],
        legend: {
          orient: 'vertical',
          top: 'middle',
          right: 10,
          textStyle: {
            color: '#333',
          },
          data: chartData.map((item) => item.name),
        },
      }}
    />
  );
}

export default PieChart;