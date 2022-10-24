import React from "react";
import { archiveNote, deleteNote, getActiveNotes, getArchivedNotes, getNote, unarchiveNote } from "../utils/network_data";

export const useFetchNotes = (pathname, id) => {
	const [notes, setNotes] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	const fetchNotes = React.useCallback(() => {
		switch (pathname) {
			case "/home":
				setLoading(true);
				getActiveNotes().then(({ data }) => {
					setNotes(data);
					setLoading(false);
				});
				break;
			case "/archive":
				setLoading(true);
				getArchivedNotes().then(({ data }) => {
					setNotes(data);
					setLoading(false);
				});
				break;
			case `/detail/${id}`:
				setLoading(true);
				getNote(id).then(({ data }) => {
					setNotes(data);
					setLoading(false);
				});
				break;
			default:
				break;
		}
	}, [id, pathname]);

	React.useEffect(() => {
		fetchNotes();
	}, [fetchNotes]);

	const deleteHandler = (id) => {
		if (window.confirm("delete?")) {
			deleteNote(id).then(() => {
				fetchNotes();
				alert("note deleted!");
			});
		} else {
			window.confirm.abort();
		}
	};

	const archiveHandler = (id) => {
		if (window.confirm("archive?")) {
			archiveNote(id).then(() => {
				fetchNotes();
				alert("note archived!");
			});
		} else {
			window.confirm.abort();
		}
	};

	const unArchiveHandler = (id) => {
		if (window.confirm("un-archive?")) {
			unarchiveNote(id).then(() => {
				fetchNotes();
				alert("note un-archived!");
			});
		} else {
			window.confirm.abort();
		}
	};

	return { notes, loading, deleteHandler, archiveHandler, unArchiveHandler };
};
