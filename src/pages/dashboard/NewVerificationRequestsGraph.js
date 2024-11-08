import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

const NewVerificationRequestsGraph = () => {
    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement
    );

    const DATA_COUNT = 7;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

    const data = {
        labels: ["January", "February", "March", "April", "May", "June",],
        datasets: [
            {
                label: 'Dataset 1',
                data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * 200 - 100)),
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const options = {
        plugins: {
          title: {
            display: false, 
          },
          subtitle: {
            display: false, 
          },
          legend: {
            display: false, 
          },
        },
        scales: {
          x: {
            display: true, 
          },
          y: {
            display: true, 
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      };
    return <Line data={data} options={options} height={120} width={300}/>;
};

export default NewVerificationRequestsGraph;
