import React from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { addNote } from "../utils/network_data";
import { Context } from "../context/context";
import { addPage } from "../utils/lang_properties";
import AddNote from "../components/AddNote";

const AddPage = () => {
	const { locale } = React.useContext(Context);
	const navigate = useNavigate();
	const [title, titleHandler] = useInput("");
	const [body, bodyHandler] = useInput("");

	const addNoteHandler = async (e) => {
		e.preventDefault();

		if (title.length < 1) {
			alert(addPage[locale].alert);
		} else {
			const { error } = await addNote({ title, body });
			console.log(title);
			if (!error) {
				navigate("/home");
			}
		}
	};

	return (
		<div className="AddPage">
			<AddNote
				onAddNote={addNoteHandler}
				title={title}
				onTitleChange={titleHandler}
				body={body}
				onBodyChange={bodyHandler}
				locale={locale}
				addPage={addPage}
			/>
		</div>
	);
};

export default AddPage;
