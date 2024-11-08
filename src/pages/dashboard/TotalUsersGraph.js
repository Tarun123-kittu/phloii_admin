import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TotalUsersGraph = () => {
    const options = {
        chart: {
            type: 'spline',
            width: 300,  
            height: 100  
        },
        title: {
            text: null 
        },
        xAxis: {
            visible: false 
        },
        yAxis: {
            visible: false 
        },
        credits: {
            enabled: false 
        },
        legend: {
            enabled: false 
        },
        tooltip: {
            enabled: true, 
            formatter: function () {
                return `Value: ${this.y}`; 
            }
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6]
            }
        ]
    };
    
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

export default TotalUsersGraph;
