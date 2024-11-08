import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Analytics = () => {
  const chartRef = useRef(null);

  const options = {
    chart: {
      type: 'pie',
      custom: {},
      events: {
        render() {
          const chart = this;
          const series = chart.series[0];
          let customLabel = chart.options.chart.custom.label;

          if (!customLabel) {
            customLabel = chart.options.chart.custom.label = chart.renderer.label(
              'Total<br/>' + '<strong>2 877 820</strong>'
            )
              .css({
                color: '#000',
                textAnchor: 'middle'
              })
              .add();
          }

          const x = series.center[0] + chart.plotLeft;
          const y = series.center[1] + chart.plotTop - (customLabel.attr('height') / 2);

          customLabel.attr({ x, y });
          customLabel.css({
            fontSize: `${series.center[2] / 12}px`
          });
        }
      }
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    title: {
      text: 'Total Users'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: '{point.name}'
          },
          {
            enabled: true,
            distance: -15,
            format: '{point.percentage:.0f}%',
            style: {
              fontSize: '0.9em'
            }
          }
        ],
        showInLegend: true
      }
    },
    series: [
      {
        name: 'Registrations',
        colorByPoint: true,
        innerSize: '75%',
        data: [
          { name: 'Active', y: 23.9 },
          { name: 'Deleted', y: 12.6 },
          { name: 'Blocked', y: 37.0 },
        ]
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />;
};

export default Analytics;
