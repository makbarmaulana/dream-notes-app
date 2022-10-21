import React from "react";
import { ShowFormattedDate } from "../utils/date-formatter";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import Button from "../components/Action/Button";

const DetailPage = () => {
	const { id } = useParams();
	const [note, setNote] = React.useState(null);

	React.useEffect(() => {
		getNoteData(id);
	}, [id]);

	const getNoteData = async (id) => {
		getNote(id).then(({ data }) => {
			setNote(data);
		});
	};

	return (
		<div className="DetailPage">
			<div className="NoteDetail">
				<div className="note-detail-content">
					<p className="createdAt">
						{ShowFormattedDate(note?.createdAt)}
					</p>
					<h3 className="title">{note?.title}</h3>
					<p className="body">{note?.body}</p>
				</div>
				<div className="buttons">
					<Button className="btn-archive" />
					<Button className="btn-delete" />
				</div>
			</div>
		</div>
	);
};

export default DetailPage;
