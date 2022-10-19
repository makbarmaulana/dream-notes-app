import React from "react";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/network-data";
import { Context } from "../context/Context";

const ArchivePage = () => {
	const { locale } = React.useContext(Context);

	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const fetchNotes = () => {
		getArchivedNotes().then(({ data }) => {
			setNotes(data);
			setLoading(false);
		});
	};

	React.useEffect(() => {
		setLoading(true);
		fetchNotes();
	}, []);

	const deleteHandler = (id) => {
		if (window.confirm("delete?")) {
			deleteNote(id).then(() => {
				fetchNotes();
				alert("delete success");
			});
		}
	};

	const archiveHandler = (id) => {
		if (window.confirm("unarchive?")) {
			unarchiveNote(id).then(() => {
				fetchNotes();
				alert("note unarchived!")
			});
		}
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
				{locale === "en" ? "Archive Notes" : "Arsip Catatan"}
			</h1>
			{loading ? (
				<p style={{ display: "flex", placeContent: "center" }}>
					Fetching Data...
				</p>
			) : notes.length < 1 ? (
				<p style={{ display: "flex", placeContent: "center" }}>
					Archive Notes Empty
				</p>
			) : filteredNotes.length < 1 ? (
				<p style={{ display: "flex", placeContent: "center" }}>
					No Notes Found!
				</p>
			) : (
				<NoteList
					notes={filteredNotes}
					onDelete={deleteHandler}
					onArchive={archiveHandler}
				/>
			)}
		</div>
	);
};

export default ArchivePage;
