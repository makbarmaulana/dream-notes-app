import React from "react";
import Header from "../components/Header";
import NoteList from "../components/NoteList";
import { archivePage } from "../utils/lang_properties";
import { Context } from "../context/context";
import { useLocation } from "react-router-dom";
import { useFetchNotes } from "../hooks/useFetchNotes";

const ArchivePage = () => {
	const { locale } = React.useContext(Context);
	const { pathname } = useLocation();
	const { notes, loading, deleteHandler, unArchiveHandler } =
		useFetchNotes(pathname);
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
			<h1 className="status-notes">{archivePage[locale].header}</h1>

			{loading ? (
				<div className="loader" />
			) : notes.length < 1 ? (
				<p className="notes-empty">{archivePage[locale].empty}</p>
			) : filteredNotes.length < 1 ? (
				<p className="notes-empty">{archivePage[locale].notFound}</p>
			) : (
				<NoteList
					notes={filteredNotes}
					onDelete={deleteHandler}
					onArchive={unArchiveHandler}
				/>
			)}
		</div>
	);
};

export default ArchivePage;
