import {BarChart} from "../chart/Chart";

const Revenuchart = () => {
	return (
		<div className="bg-white rounded-lg w-full p-4">
			<h2 className="text-lg uppercase my-6 mx-4 text-center text-gray-500 opacity-75 font-semibold">
				Revenu & Transaction
			</h2>

			<BarChart data1={[300, 400, 500, 600,700,500,500]} data2={[334,44,55,59,90, 345, 223, 55]} title1="Revenu" title2="Transactions" horizontal={false} />
		</div>
	);
};

export default Revenuchart;
