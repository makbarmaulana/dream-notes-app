import React from "react";
import Navigation from "../components/Navigation";
import NoteList from "../components/NoteList";
import { archiveNote, deleteNote, getActiveNotes, putAccessToken } from "../utils/network-data";

const HomePage = () => {
	const [notes, setNotes] = React.useState([]);

	React.useEffect(() => {
		const fetchActiveNotes = async () => {
			const { data } = await getActiveNotes()
			setNotes(data)
		}

		fetchActiveNotes()
	}, [])

	const deleteHandler = (id) => {
		deleteNote(id)
	};

	const archiveHandler = (id) => {
		archiveNote(id)
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
