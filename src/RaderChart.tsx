import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

  export function RaderChart(): JSX.Element {
    const data = {
        labels: [
          ["Running", "90"], 
          ["Swimming", "10"],
          ["Eating", "4"],
          ["Cycling", "52"],
          ["Sleeping", "15"],
        ],
        datasets: [
          {
            data: [9, 10, 4, 5, 1],
            backgroundColor: 'rgba(255, 255, 132, 0.6)',
            borderColor: 'rgba(255, 99, 244, 1)',
            borderWidth: 1,
            pointRadius: 0,
          },
        ],
      };
    
      const options: any = {
        type: 'radar',
        
        scales: {
          r: {            
            min: 0,
            max: 100,
            grid: {
              circular: false,
              lineWidth: 5,
              color: "rgba(255, 250, 25, 0.9)",
            },
            angleLines: {
              color: 'rgba(0, 0, 0, 0.5)',
              lineWidth: 2,
            },
            pointLabels: {
              font: {
                size: 16,
              },
              padding: 10,
              display: true,
            },
            ticks: {
              beginAtZero: true,
              display: false,
              stepSize: 20,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      };
    
      return <Radar data={data} options={options} className="bg-white w-full h-full" />;
}