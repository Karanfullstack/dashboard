import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartData,
	ArcElement,
	ChartOptions,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

// main function
export const BarChart = ({
	title1,
	title2,
	horizontal = false,
	labels = months,
	data1,
	data2,
}: ILineChart) => {
	// options
	const options: ChartOptions<"bar"> = {
		responsive: true,
		indexAxis: horizontal ? "y" : "x",

		elements: {},
		plugins: {
			legend: {
				display: true,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					display: false,
				},
			},
			x: {
				beginAtZero: true,
				grid: {
					display: false,
				},
			},
		},
	};

	const data: ChartData<"bar", number[], string> = {
		labels,
		datasets: [
			{
				label: title1,
				data: data1,
				categoryPercentage: 0.7,
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				barThickness: "flex",
				barPercentage: 0.8,
			},
			{
				label: title2,
				data: data2,
				backgroundColor: "rgba(53, 162, 235, 0.5)",
				barThickness: "flex",
				barPercentage: 0.8,
			},
		],
	};
	return <Bar options={options} data={data} />;
};

interface ILineChart {
	labels?: string[];
	data1: number[];
	data2: number[];
	title1: string;
	title2: string;
	bgColor1?: string;
	bgColor2?: string;
	horizontal?: boolean;
}

// interface for doughnut chart
interface IDoughnut {
	labels: string[];
	data: number[];
	backgroundColor?: string[];
	cutout?: number;
	legends?: boolean;
	offset?: number[];
}

export const DoughnutChart = ({
	labels,
	data,
	backgroundColor,
	cutout = 80,
	legends = true,
	offset,
}: IDoughnut) => {
	const dougnutData: ChartData<"doughnut", number[], string> = {
		labels,
		datasets: [
			{
				data,
				backgroundColor,
				borderWidth: 2,
				offset,
			},
		],
	};
	const dougnutOptions: ChartOptions<"doughnut"> = {
		responsive: true,
		plugins: {
			legend: {
				display: legends,
				position: "bottom",
				labels: {
					padding: 10,
				},
			},
		},
		cutout,
	};
	return <Doughnut data={dougnutData} options={dougnutOptions} />;
};
