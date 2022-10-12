import React from "react";
import Button from "./Button";

const AddNote = (props) => {
	return (
		<div className="AddNote">
			<h2 className="addnote-title">Add Note</h2>
			<form className="addnote-form">
				<input
					type="text"
					placeholder="title..."
					value={props.title}
					onChange={props.onTitleChange}
					required
				/>
				<textarea
					type="text"
					placeholder="description..."
					value={props.body}
					onChange={props.onBodyChange}
					required
				/>
				<Button
					onClick={props.onAddNote}
					className="btn-addnote"
					label="ADD NOTE"
				/>
			</form>
		</div>
	);
};

export default AddNote;
