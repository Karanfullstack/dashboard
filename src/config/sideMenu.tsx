import {AiFillFileText} from "react-icons/ai";
import {
	FaChartBar,
	FaChartLine,
	FaChartPie,
	FaStopwatch,
	FaGamepad,
} from "react-icons/fa";
import {IoIosPeople} from "react-icons/io";
import {
	RiDashboardFill,
	RiCoupon3Fill,
	RiShoppingBagFill,
} from "react-icons/ri";

export const Dashboard: sidebarMenuProps[] = [
	{
		url: "/admin/dashboard",
		icon: <RiDashboardFill />,
		name: "Dashboard",
	},
	{
		url: "/admin/products",
		icon: <RiShoppingBagFill />,
		name: "Products",
	},
	{
		url: "/admin/customers",
		icon: <IoIosPeople />,
		name: "Customers",
	},
	{
		url: "/admin/transactions",
		icon: <AiFillFileText />,
		name: "Transactions",
	},
];

// Chart menu

export const CartMenu: sidebarMenuProps[] = [
	{
		url: "/admin/chart/bar",
		name: "Bar",
		icon: <FaChartBar />,
	},
	{
		url: "/admin/chart/pie",
		name: "Pie",
		icon: <FaChartPie />,
	},
	{
		url: "/admin/chart/line",
		name: "Line",
		icon: <FaChartLine />,
	},
];

export const Apps = [
	{
		url: "/admin/app/stopwatch",
		name: "Stopatch",
		icon: <FaStopwatch />,
	},
	{
		url: "/admin/app/coupon",
		name: "Coupon",
		icon: <RiCoupon3Fill />,
	},
	{
		url: "/admin/app/toss",
		name: "Toss",
		icon: <FaGamepad />,
	},
];

type sidebarMenuProps = {
	url: string;
	icon: JSX.Element;
	name: string;
};
