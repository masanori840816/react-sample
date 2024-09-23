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
        labels: ['Running', 'Swimming', 'Eating', 'Cycling', 'Sleeping'],
        datasets: [
          {
            label: 'John',
            data: [90, 10, 4, 52, 15],
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      const options: any = {
        scale: {
          ticks: { beginAtZero: true,
            min: 0,
        max: 100,
        stepSize: 20,
           },
        },
        plugins: {
          legend: {
            
            display: false,
            position: 'top',
          },
          title: {
            display: false,
            text: 'Radar Chart Example',
          },
        },
      };
    
      return <Radar data={data} options={options} />;
}