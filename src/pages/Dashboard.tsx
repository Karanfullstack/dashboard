import Layout from "./Layout";

import Widgets from "../components/dashboard/Widgets";
import Search from "../components/dashboard/Search";

const Dashboard = () => {
	return (
		<Layout>
			<main>
				{/* search bar */}
				<Search />

				{/* widget container */}
				<section className="flex justify-around items-stretch p-3  pr-9  mt-5 ">
					<Widgets
						color="orangered"
						amount={true}
						value={2300}
						heading="Revenu"
						percent={10}
					/>

					<Widgets
						color="skyblue"
						amount={true}
						value={2300}
						heading="Users"
						percent={10}
					/>

					<Widgets
						color="orange"
						amount={true}
						value={2300}
						heading="Transactions"
						percent={10}
					/>
					<Widgets
						color="black"
						amount={true}
						value={2300}
						heading="Products"
						percent={10}
					/>
				</section>

				{/*  revenu and intentory */}
				<section className="flex gap-8 p-5">
					{/* revenu chart */}
					<div className="bg-white rounded-lg w-full p-4">
						<h2 className="text-xl uppercase my-6 mx-4 text-center text-gray-500 opacity-75 font-semibold">Revenu & Transaction</h2>
					</div>

					{/* Intentory */}
					<div className="bg-white rounded-lg max-w-[200px] w-full pb-8 flex flex-col justify-center items-center">
						<h2 className="text-lg uppercase font-bold my-4 mx-2 text-gray-500 opacity-75">Inventory</h2>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default Dashboard;
