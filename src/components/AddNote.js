import React from "react";
import Button from "./Button";

const AddNote = (props) => {
	return (
		<div className="AddInputNote">
			<h1 className="title">Add Note</h1>
			<form className="form">
				<input
					className="input add-title"
					type="text"
					placeholder="Add title..."
					value={props.title}
					onChange={props.onTitleChange}
					required
				/>
				<textarea
					className="input add-body"
					type="text"
					placeholder="Add description..."
					value={props.body}
					onChange={props.onBodyChange}
					data-role="none"
					required
				/>
				<Button
					onClick={props.onAddNote}
					className="btn-addnote"
					label="ADD"
				/>
			</form>
		</div>
	);
};

export default AddNote;
