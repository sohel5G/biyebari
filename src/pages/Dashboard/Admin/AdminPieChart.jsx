import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function AdminPieChart({ adminStatistic }) {

    const data = {
        labels: ['Total Biodata Count', 'Total Male Biodata', 'Total Female Biodata', 'Total Premium Biodata', 'Total Revenue'],
        datasets: [
            {
                label: '',
                data: [
                    adminStatistic?.totalBiodata,
                    adminStatistic?.maleBiodata,
                    adminStatistic?.femaleBiodata,
                    adminStatistic?.premiumBiodata,
                    adminStatistic?.subTotalRevenue
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return <Pie data={data} />;
}

AdminPieChart.propTypes = {
    adminStatistic: PropTypes.object
};