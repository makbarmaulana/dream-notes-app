import React from "react";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import { Context } from "../context/Context";
import { useLocation } from "react-router-dom";
import { useFetchAPI } from "../hooks/useFetchAPI";

const HomePage = () => {
	const { pathname } = useLocation();
	const { locale } = React.useContext(Context);
	const { notes, loading, deleteHandler, archiveHandler } =
		useFetchAPI(pathname);
	const [keyword, setKeyword] = React.useState("");

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
				<div className="loader" />
			) : notes.length < 1 ? (
				<p className="notes-empty">Active Notes Empty!</p>
			) : filteredNotes.length < 1 ? (
				<p className="notes-empty">No Notes Found!</p>
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
