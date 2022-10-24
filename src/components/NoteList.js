import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

const NoteList = (props) => {
	return (
		<ul className="NoteList">
			{props.notes.map((note) => (
				<NoteItem
					{...note}
					key={note.id}
					id={note.id}
					onDelete={props.onDelete}
					onArchive={props.onArchive}
				/>
			))}
		</ul>
	);
};

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object),
	id: PropTypes.string,
	onDelete: PropTypes.func.isRequired,
	onArchive: PropTypes.func.isRequired,
};

export default NoteList;
