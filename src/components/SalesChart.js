import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SalesChart = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chartData = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
    };

    const chartOptions = {
      type: 'line', // Change to 'line' type for area chart
      data: {
        labels: [
          "00.00",
          "00.20",
          "00.30",
          "00.40",
          "00.50",
          "00.60",
          "00.70",
        ],
        datasets: chartData.series.map((serie) => ({
          label: serie.name,
          data: serie.data,
          fill: true, // Fill the area under the line
        })),
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            type: 'category',
          },
          y: {
            min: 0,
            max: 120,
            ticks: {
              stepSize: 30,
            },
          },
        },
      },
    };

    // Set the height dynamically to the full height of the dashboard box
    chartContainerRef.current.style.height = '100%';
    chartContainerRef.current.style.width = '100%';

    const myChart = new Chart(ctx, chartOptions);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="dashboard-box">
      <div ref={chartContainerRef} className="sales-chart-container">
        <canvas ref={chartRef} className="sales-chart-canvas" />
      </div>
    </div>
  );
};

export default SalesChart;
