import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";
import ArchivePage from "../pages/ArchivePage";

export const ROUTE_PROPS = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/archive",
		element: <ArchivePage />,
	},
	{
		path: "/add",
		element: <AddPage />,
	},
];
