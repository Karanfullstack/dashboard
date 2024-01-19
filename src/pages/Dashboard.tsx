import Layout from "./Layout";

import Widgets from "../components/dashboard/Widgets";
import Search from "../components/dashboard/Search";
import Inventory from "../components/dashboard/Inventory";
import RevenuChart from "../components/dashboard/RevenuChart";
import { categories } from "../assets/intentory.json";
import MaleFemaleChart from "../components/dashboard/MaleFemaleChart";
import { DoughnutChart } from "../components/chart/Chart";
import { BiMaleFemale } from "react-icons/bi";

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
						percent={50}
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
				<section className="flex gap-8 h-fit p-5 ">
					{/* revenu chart */}
					<RevenuChart />

					{/* Intentory */}
					<div className="bg-white shadow-md h-fit  rounded-lg  max-w-[260px] p-5 w-full  flex flex-col justify-center items-center">
						<h2 className="text-md uppercase tracking-widest  font-bold my-4 mx-2 text-gray-500 opacity-75">
							Inventory
						</h2>
						{/* Inventory */}
						<Inventory categories={categories} />
					</div>
				</section>

				{/* Transaction Section */}
				<section className="flex gap-3 pb-3">
					<div className=" relative w-full bg-white rounded-lg shadow-lg h-fit pb-4 max-w-[250px]">
						<h1 className="text-center mt-6 mb-6 border w-fit m-auto text-xl tracking-widest text-gray-500">
							Gender Ratio
						</h1>

						<DoughnutChart
							labels={["Male", "Female"]}
							data={[12, 34]}
							backgroundColor={["hsl(238, 100%, 85%)", "hsl(207, 100%, 63%)"]}
						/>
						<p className="absolute top-[50%] bottom-0 left-[46%] right-0">
							<BiMaleFemale size={25} />
						</p>
					</div>

					<div></div>
				</section>
			</main>
		</Layout>
	);
};

export default Dashboard;
