import HomePage from "../pages/HomePage";
import ArchivePage from "../pages/ArchivePage";
import AddPage from "../pages/AddPage";
import PageNotFound from "../pages/PageNotFound"

export const ROUTE_PROPS = [
	{
		path: "/home",
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
	{
		path: "*",
		element: <PageNotFound />,
	},
];
