import React from "react";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/network-data";
import { Context } from "../context/Context";

const HomePage = () => {
	const { locale } = React.useContext(Context);

	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState("");

	React.useEffect(() => {
		fetchActiveNotes();
	}, []);

	const fetchActiveNotes = async () => {
		const { data } = await getActiveNotes();
		setNotes(data);
	};

	const deleteHandler = async (id) => {
		await deleteNote(id);
		fetchActiveNotes();
	};

	const archiveHandler = async (id) => {
		await archiveNote(id);
		fetchActiveNotes();
	};

	const keywordHandler = (keyword) => {
		setKeyword(keyword);
	};

	const filteredNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(keyword.toLowerCase())
	);

	return (
		<div className="HomePage">
			<Header keyword={keyword} keywordChange={keywordHandler} />
			<h1 className="status-notes">
				{locale === "en" ? "Active Notes" : "Catatan Aktif"}
			</h1>
			<NoteList
				notes={filteredNotes}
				onDelete={deleteHandler}
				onArchive={archiveHandler}
			/>
		</div>
	);
};

export default HomePage;
