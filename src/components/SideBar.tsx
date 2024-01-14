import {Link} from "react-router-dom";
import {Dashboard, CartMenu, Apps} from "../config/sideMenu";
import {useLocation} from "react-router-dom";
const SideBar = () => {
	const location = useLocation();

	return (
		<aside className=" min-w-fit min-h-screen bg-white p-4 shadow-sm ">
			<h2 className="text-2xl font-semibold">Logo</h2>

			{/* Dashboard */}
			<div className=" m-2 mt-8">
				{/* logo */}
				<h5 className="text-sm opacity-30 uppercase font-semibold m-4">
					Dashboard
				</h5>

				<ul className="ml-3 text-sm ">
					{Dashboard.map((item) => (
						<li
							key={item.name}
							className={`${
								location.pathname === item.url
									? "bg-slate-100 text-black font-semibold rounded-lg"
									: ""
							} p-2 mt-4  transition-all hover:bg-slate-50 rounded-lg`}
						>
							<Link to={`${item.url}`} className="text-gray-700 tracking-wide">
								<div className="flex gap-3 items-center">
									<span className="text-xl">{item.icon} </span>
									<span>{item.name}</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* Charts */}
			<div className=" m-2 mt-8">
				<h5 className="text-sm opacity-30 uppercase font-semibold m-4">
					Charts
				</h5>

				<ul className="ml-3 text-sm ">
					{CartMenu.map((item) => (
						<li
							key={item.name}
							className={`${
								location.pathname === item.url
									? "bg-slate-100 text-black font-semibold rounded-lg"
									: ""
							} p-2 mt-4  transition-all hover:bg-slate-50 rounded-lg`}
						>
							<Link to={`${item.url}`} className="text-gray-700 tracking-wide">
								<div className="flex gap-3 items-center">
									<span className="text-xl">{item.icon} </span>
									<span>{item.name}</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* Apps */}
			<div className=" m-2 mt-8">
				<h5 className="text-sm opacity-30 uppercase font-semibold m-4">
					Charts
				</h5>

				<ul className="ml-3 text-sm ">
					{Apps.map((item) => (
						<li
							key={item.name}
							className={`${
								location.pathname === item.url
									? "bg-slate-100 text-black font-semibold rounded-lg"
									: ""
							} p-2 mt-4  transition-all hover:bg-slate-50 rounded-lg`}
						>
							<Link to={`${item.url}`} className="text-gray-700 tracking-wide">
								<div className="flex gap-3 items-center">
									<span className="text-xl">{item.icon} </span>
									<span>{item.name}</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default SideBar;
