import {HiTrendingUp, HiTrendingDown} from "react-icons/hi";

const Widgets = ({color, heading, amount, value, percent}: WidgetsProps) => {
	return (
		<article className=" flex justify-between gap-2 p-7 bg-white w-fit shadow-lg rounded-lg ">
			<div>
				<p className="text-md opacity-65">{heading}</p>
				<h4 className="text-lg font-bold">{`${
					amount ? "$" + value : value
				}`}</h4>

				{percent > 0 ? (
					<span className="text-green-400 flex items-center gap-2">
						<HiTrendingUp /> +10%
					</span>
				) : (
					<span className="text-green-400 flex items-center gap-2">
						<HiTrendingDown /> {percent}%
					</span>
				)}
			</div>

			<div
				style={{
					background: `conic-gradient(${color} ${Math.abs(
						(percent / 100) * 360
					)}deg, rgba(255,255,255) 0)`,
				}}
				className="cibefore relative w-20 h-20 grid place-items-center rounded-[50%]"
			>
				<span className=" z-40">{percent}%</span>
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
