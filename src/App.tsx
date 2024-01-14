import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Suspense, lazy} from "react";
import Loader from "./components/Loader";

const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Products = lazy(() => import("./pages/Products"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route path="/admin/products" element={<Products />} />
					<Route path="/admin/customers" element={<Customers />} />
					<Route path="/admin/transactions" element={<Transactions />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
