import React from "react";
import {
	archiveNote,
	deleteNote,
	getActiveNotes,
	getArchivedNotes,
	getNote,
	unarchiveNote,
} from "../utils/network-data";

export const useFetchAPI = (pathname, id) => {
	const [notes, setNotes] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	const fetchNotes = React.useCallback(() => {
		if (pathname === "/home") {
			getActiveNotes().then(({ data }) => {
				setNotes(data);
				setLoading(false);
			});
		}

		if (pathname === "/archive") {
			getArchivedNotes().then(({ data }) => {
				setNotes(data);
				setLoading(false);
			});
		}

		if (pathname === `/detail/${id}`) {
			getNote(id).then(({ data }) => {
				setNotes(data);
				setLoading(false);
			});
		}
	}, [id, pathname]);

	React.useEffect(() => {
		fetchNotes();
	}, [fetchNotes]);

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

	const unArchiveHandler = (id) => {
		if (window.confirm("un-archive?")) {
			unarchiveNote(id).then(() => {
				fetchNotes();
				alert("note un-archived!");
			});
		}
	};

	return { notes, loading, deleteHandler, archiveHandler, unArchiveHandler };
};
