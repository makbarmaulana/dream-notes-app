import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import NoteList from "../components/NoteList";
import {
	archiveNote,
	deleteNote,
	getActiveNotes,
	putAccessToken,
} from "../utils/network-data";

const HomePage = () => {
	const [notes, setNotes] = React.useState([]);
	const navigate = useNavigate();

	const fetchActiveNotes = async () => {
		const { data } = await getActiveNotes();
		setNotes(data);
	};

	React.useEffect(() => {
		fetchActiveNotes();

	}, []);

	const deleteHandler = async (id) => {
		await deleteNote(id);

		fetchActiveNotes();
	};

	const archiveHandler = (id) => {
		archiveNote(id);

		navigate("/archived");
	};

	const onLogoutHandler = () => {
		putAccessToken("");
		window.location.reload();
	};

	return (
		<div className="HomePage">
			<Navigation onLogout={onLogoutHandler} />
			<h1>HomePage</h1>
			<NoteList
				notes={notes}
				onDelete={deleteHandler}
				onArchive={archiveHandler}
			/>
		</div>
	);
};

export default HomePage;
