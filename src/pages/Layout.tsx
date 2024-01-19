import {ReactNode} from "react";
import SideBar from "../components/SideBar";

interface ChildProps {
	children: ReactNode;
}
const Layout = ({children}: ChildProps) => {
	return (
		<div className=" grid grid-cols-10 gap-5 h-screen bg-slate-50">
			{/* Sidebar */}
			<div className="col-span-2">
				<SideBar />
			</div>

			{/* main content */}
			<main className="col-span-8 overflow-y-auto no-scrollbar">
				{children}
			</main>
		</div>
	);
};

export default Layout;
