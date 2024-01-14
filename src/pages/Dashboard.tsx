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

				<section className="flex justify-between items-stretch p-3 px-4 pr-9  mt-5 ">
					<Widgets
						color="orangered"
						amount={true}
						value={2300}
						heading="Revenu"
						percent={10}
					/>

					<Widgets
						color="orangered"
						amount={true}
						value={2300}
						heading="Revenu"
						percent={10}
					/>

					<Widgets
						color="orangered"
						amount={true}
						value={2300}
						heading="Revenu"
						percent={10}
					/>
					<Widgets
						color="orangered"
						amount={true}
						value={2300}
						heading="Revenu"
						percent={10}
					/>
				</section>
			</main>
		</Layout>
	);
};

export default Dashboard;
