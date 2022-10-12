import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
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
	const [keyword, setKeyword] = React.useState("");
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

	const keywordHandler = (keyword) => {
		setKeyword(keyword);
	};

	const filteredNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(keyword.toLowerCase())
	);

	const onLogoutHandler = () => {
		putAccessToken("");
		window.location.reload();
	};

	return (
		<div className="HomePage">
			{/* <Navigation onLogout={onLogoutHandler} /> */}
			<Header
				keyword={keyword}
				keywordChange={keywordHandler}
				onLogout={onLogoutHandler}
			/>
			<h1 className="title-page">Active Notes</h1>
			<NoteList
				notes={filteredNotes}
				onDelete={deleteHandler}
				onArchive={archiveHandler}
			/>
		</div>
	);
};

export default HomePage;
