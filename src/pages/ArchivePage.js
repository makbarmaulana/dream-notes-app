import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import { getArchivedNotes, putAccessToken, deleteNote, unarchiveNote } from "../utils/network-data";

const ArchivePage = () => {
	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState("");
	const navigate = useNavigate();

	const fetchArchiveNotes = async () => {
		const { data } = await getArchivedNotes();
		setNotes(data);
	};

	React.useEffect(() => {
		fetchArchiveNotes();
	}, []);

	const deleteHandler = async (id) => {
		await deleteNote(id);

		fetchArchiveNotes();
	};

	const archiveHandler = async (id) => {
		await unarchiveNote(id)

		navigate("/");
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
			<Header
				keyword={keyword}
				keywordChange={keywordHandler}
				onLogout={onLogoutHandler}
			/>
			<h1 className="status-notes">Archive Notes</h1>
			<NoteList
				notes={filteredNotes}
				onDelete={deleteHandler}
				onArchive={archiveHandler}
			/>
		</div>
	);
};

export default ArchivePage;
