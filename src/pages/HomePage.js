import React from "react";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/network-data";
import { Context } from "../context/Context";

const HomePage = () => {
	const { locale } = React.useContext(Context);

	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const fetchNotes = () => {
		getActiveNotes().then(({ data }) => {
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
		if (window.confirm("archive?")) {
			archiveNote(id).then(() => {
				fetchNotes();
				alert("note archived!");
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
				{locale === "en" ? "Active Notes" : "Catatan Aktif"}
			</h1>

			{loading ? (
				<p style={{ display: "flex", placeContent: "center" }}>
					Fetching Data...
				</p>
			) : notes.length < 1 ? (
				<p style={{ display: "flex", placeContent: "center" }}>
					Active Notes Empty
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

export default HomePage;
