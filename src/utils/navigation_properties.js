import { BsHouseDoorFill, BsFillArchiveFill, BsFillPlusSquareFill } from "react-icons/bs";

export const navigation = [
	{
		path: "/home",
		icon: <BsHouseDoorFill />,
		title: {
			en: "Home",
			id: "Beranda",
		},
	},
	{
		path: "/archive",
		icon: <BsFillArchiveFill />,
		title: {
			en: "Archive",
			id: "Arsip",
		},
	},
	{
		path: "/add",
		icon: <BsFillPlusSquareFill />,
		title: {
			en: "Add Note",
			id: "Tambah Catatan",
		},
	},
];
