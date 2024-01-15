import Layout from "./Layout";

import Widgets from "../components/dashboard/Widgets";
import Search from "../components/dashboard/Search";
import Inventory from "../components/dashboard/Inventory";
import RevenuChart from "../components/dashboard/revenuchart";
import {categories} from "../assets/intentory.json";
const Dashboard = () => {
	return (
		<Layout>
			<main>
				{/* search bar */}
				<Search />

				{/* widget container */}
				<section className="flex justify-around items-stretch p-3  pr-9 mt-5 ">
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
				<section className="flex gap-8 p-5 shadow-md">
					{/* revenu chart */}
					<RevenuChart />

					{/* Intentory */}
					<div className="bg-white shadow-md h-fit  rounded-lg  max-w-[250px] px-3 w-full pb-8 flex flex-col justify-center items-center">
						<h2 className="text-md uppercase tracking-widest  font-bold my-4 mx-2 text-gray-500 opacity-75">
							Inventory
						</h2>
						{/* Inventory */}
						<Inventory categories={categories} />
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default Dashboard;
