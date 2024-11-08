import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsVenn from 'highcharts/modules/venn';

HighchartsVenn(Highcharts); 

const ActiveUserGraph = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        Highcharts.chart(chartRef.current, {
            chart: {
                height: 100, 
                width: 300   
            },
            accessibility: {
                point: {
                    valueDescriptionFormat: '{point.name}: {point.longDescription}.'
                }
            },
            series: [{
                type: 'venn',
                data: [
                    {
                        sets: ['A'],
                        value: 4,
                        name: 'Active',
                    },
                    {
                        sets: ['B'],
                        value: 1,
                        name: 'InActive',
                    },
                    {
                        sets: ['A', 'B'],
                        value: 1
                    }
                ]
            }],
            tooltip: {
                headerFormat: '<span style="color:{point.color}">\u2022</span> <span style="font-size: 14px"> {point.point.name}</span><br/>'
            },
            title: {
                text: ''  
            },
            xAxis: {
                visible: false 
            },
            yAxis: {
                visible: false 
            },
            credits: {
                enabled:false
            },
            legend: {
                enabled: false 
            }
        });
    }, []);

    return <div ref={chartRef} id="container"></div>;
};

export default ActiveUserGraph;
