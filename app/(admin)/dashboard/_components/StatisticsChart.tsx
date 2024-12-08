import { Post } from '@/types';

import {
	Chart as ChartJS,
	LineController,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	BarController,
	BarElement,
	PointElement,
	Legend,
	LineElement,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

interface StatisticsChartProps {
	posts: Post[];
}

const StatisticsChart = ({ posts }: StatisticsChartProps) => {
	ChartJS.register(
		LineController,
		BarController,
		CategoryScale,
		LinearScale,
		Title,
		Tooltip,
		Legend,
		PointElement,
		LineElement,
		BarElement
	);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: 'Số lượng bài viết xuất bản theo tháng',
				font: {
					size: 20,
				},
			},
		},
	};

	const monthlyData: Record<number, number[]> = posts
		.filter((post) => post.status === 'publish')
		.reduce((acc: Record<number, number[]>, post) => {
			const date = new Date(post.createdAt);
			const year = date.getFullYear();
			const month = date.getMonth();

			if (!acc[year]) {
				acc[year] = Array(12).fill(0);
			}
			acc[year][month]++;
			return acc;
		}, {});

	const years = Object.keys(monthlyData);

	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const datasets = years.map((year) => ({
		label: `${year}`,
		data: monthlyData[Number(year)] || Array(12).fill(0),
		backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${
			Math.random() * 255
		},0.2)`,
	}));

	const data = {
		labels,
		datasets,
	};

	return (
		<div>
			<Bar data={data} options={options} />
		</div>
	);
};

export default StatisticsChart;
