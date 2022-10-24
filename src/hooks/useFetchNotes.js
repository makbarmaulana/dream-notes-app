import React from "react";
import PropTypes from "prop-types";
import { archiveNote, deleteNote, getActiveNotes, getArchivedNotes, getNote, unarchiveNote } from "../utils/network_data";
import { useNavigate } from "react-router-dom";

export const useFetchNotes = (pathname, id) => {
	const navigate = useNavigate();
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
		if (window.confirm("delete note?")) {
			deleteNote(id).then(() => {
				alert("note deleted!");
				pathname === `/detail/${id}`
					? navigate(notes?.archived ? "/archive" : "/home")
					: fetchNotes();
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

useFetchNotes.propTypes = {
	pathname: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
