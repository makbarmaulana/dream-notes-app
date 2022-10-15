import React from "react";
import { useNavigate } from "react-router-dom";
import AddNote from "../components/AddNote";
import { useInput } from "../hooks/useInput";
import { addNote } from "../utils/network-data";

const AddPage = () => {
	const [title, titleHandler] = useInput("");
	const [body, bodyHandler] = useInput("");

	const navigate = useNavigate();

	const addNoteHandler = async (e) => {
		e.preventDefault();

		const { error } = await addNote({ title, body });

		if (!error) {
			navigate("/home");
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
			/>
		</div>
	);
};

export default AddPage;
