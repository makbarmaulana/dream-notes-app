import React from "react";
import Button from "./Button";

const AddNote = (props) => {
	return (
		<div className="AddInputNote">
			<h2 className="title">Add Note</h2>
			<form className="form">
				<input
					className="input add-title"
					type="text"
					placeholder="title..."
					value={props.title}
					onChange={props.onTitleChange}
					required
				/>
				<textarea
					className="input add-body"
					type="text"
					placeholder="description..."
					value={props.body}
					onChange={props.onBodyChange}
					data-role="none"
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
