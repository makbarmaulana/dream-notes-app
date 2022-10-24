import React from "react";
import Button from "./Action/Button";

const AddNote = (props) => {
	const { addPage, locale } = props;

	return (
		<div className="AddInputNote">
			<h1 className="title">{addPage[locale].header}</h1>
			<form className="form">
				<input
					className="input add-title"
					type="text"
					placeholder={addPage[locale].inputTitle}
					value={props.title}
					onChange={props.onTitleChange}
					required
				/>
				<textarea
					className="input add-body"
					type="text"
					placeholder={addPage[locale].inputBody}
					value={props.body}
					onChange={props.onBodyChange}
					data-role="none"
					required
				/>
				<Button
					onClick={props.onAddNote}
					className="btn-addnote"
					label={addPage[locale].button}
				/>
			</form>
		</div>
	);
};

export default AddNote;
