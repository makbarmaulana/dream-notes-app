import HomePage from "../pages/HomePage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import PageNotFound from "../pages/PageNotFound";

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
		path: "/detail/:id",
		element: <DetailPage />,
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
