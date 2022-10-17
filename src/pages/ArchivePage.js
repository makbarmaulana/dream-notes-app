import React from "react";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/network-data";

const ArchivePage = () => {
	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState("");

	React.useEffect(() => {
		fetchArchiveNotes();
	}, []);

	const fetchArchiveNotes = async () => {
		const { data } = await getArchivedNotes();
		setNotes(data);
	};

	const deleteHandler = async (id) => {
		await deleteNote(id);

		fetchArchiveNotes();
	};

	const archiveHandler = async (id) => {
		await unarchiveNote(id);
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
