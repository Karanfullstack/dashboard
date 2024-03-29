import { useEffect, useState } from "react";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Widgets = ({ color, heading, amount, value, percent }: WidgetsProps) => {
	const [values, setValues] = useState<number>(0);
	const [percentValue, setPercentValue] = useState<number>(0);
	useEffect(() => {
		const interval = setInterval(() => {
			if (percent) {
				setPercentValue((prev) => (prev < percent ? prev + 2 : percent));
			}
			if (value) {
				setValues((prev) => (prev < value ? prev + 1 : value));
			}
		}, 50);
		const interval2 = setInterval(() => {
			if (value) {
				setValues((prev) => (prev < value ? prev + 50 : value));
			}
		}, 1);
		return () => {
			clearInterval(interval);
			clearInterval(interval2);
		};
	}, [percent, value]);
	return (
		<article className=" flex justify-between gap-2 p-7 bg-white w-fit shadow-lg rounded-lg ">
			<div>
				<p className="text-md font-semibold opacity-65">{heading}</p>
				<h4 className="text-lg tracking-wide font-bold">{`${
					amount ? "$" + values : values
				}`}</h4>

				{percent > 0 ? (
					<span className="text-green-400 flex items-center gap-2">
						<HiTrendingUp /> +{percentValue}%
					</span>
				) : (
					<span className="text-green-400 flex items-center gap-2">
						<HiTrendingDown /> {percentValue}%
					</span>
				)}
			</div>

			<div
				style={{
					background: `conic-gradient(${color} ${Math.abs(
						(percentValue / 100) * 360
					)}deg, rgba(255,255,255) 0)`,
				}}
				className="cibefore duration-300 relative w-20 h-20 grid place-items-center rounded-[50%]"
			>
				<span style={{ color }} className=" z-40">
					{percentValue}%
				</span>
			</div>
		</article>
	);
};

export default Widgets;

interface WidgetsProps {
	color: string;
	heading: string;
	amount: boolean;
	value: number;
	percent: number;
}
