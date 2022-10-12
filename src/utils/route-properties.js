import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";

export const ROUTE_PROPS = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/add",
		element: <AddPage />,
	},
];
