import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartData,
	ChartOptions,
} from "chart.js";

import {Bar} from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
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
	bgColor1,
	bgColor2,
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
			},
			{
				label: title2,
				data: data2,
				backgroundColor: "rgba(53, 162, 235, 0.5)",
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
