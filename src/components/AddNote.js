import React from "react";
import Button from "./Button";
import { Context } from "../context/Context";

const AddNote = (props) => {
	const { locale } = React.useContext(Context);

	return (
		<div className="AddInputNote">
			<h1 className="title">{locale === "en" ? "Add Note" : "Tambah Catatan"}</h1>
			<form className="form">
				<input
					className="input add-title"
					type="text"
					placeholder={locale === "en" ? "Input Title..." : "Masukan Judul..."}
					value={props.title}
					onChange={props.onTitleChange}
					required
				/>
				<textarea
					className="input add-body"
					type="text"
					placeholder={locale === "en" ? "Input Description..." : "Masukan Deskripsi..."}
					value={props.body}
					onChange={props.onBodyChange}
					data-role="none"
					required
				/>
				<Button
					onClick={props.onAddNote}
					className="btn-addnote"
					label={locale === "en" ? "ADD" : "TAMBAH"}
				/>
			</form>
		</div>
	);
};

export default AddNote;
