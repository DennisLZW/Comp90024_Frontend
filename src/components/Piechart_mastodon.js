import React from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

function PieChart_mastodon({ data }) {
    const chartData = [
    { value: data?.neutral, name: 'neutral', itemStyle: { color: '#FF0000' } },
    { value: data?.negative, name: 'negative', itemStyle: { color: '#00FF00' } },
    { value: data?.positive, name: 'positive', itemStyle: { color: '#0000FF' } },
  ];

  return (
    <ReactECharts
      style={{ height: '200px', width: '100%' }}
      option={{
        title: {
            text: 'Mastodon sentiment',
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

export default PieChart_mastodon;