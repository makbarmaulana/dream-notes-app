import React from "react";
import PropTypes from "prop-types";
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

AddNote.propTypes = {
	addPage: PropTypes.object,
	locale: PropTypes.string,
	title: PropTypes.string,
	onTitleChange: PropTypes.func,
	body: PropTypes.string,
	onBodyChange: PropTypes.func,
	onAddNote: PropTypes.func,
};

export default AddNote;
