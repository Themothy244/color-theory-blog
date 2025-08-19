import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart({labels, colors}) {
    
const isDarkMode = document.documentElement.classList.contains('dark');
    const data = {
        labels,
        datasets: [
            {
            data: Array(labels.length).fill(100), 
            backgroundColor: colors, 
            borderColor: 'transparent',
            borderWidth: 2,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        cutout: '60%',
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: isDarkMode ? '#ffffff' : '#000000'
                }
            },
            tooltip: {
            enabled: true,
            },
        },
    };
    return(
        <Doughnut data={data} options={options} className='w-full'/>
    );
}

export default DonutChart;