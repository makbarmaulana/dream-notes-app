import React from "react";
import { ShowFormattedDate } from "../utils/date-formatter";
import { useParams, useNavigate } from "react-router-dom";
import {
	archiveNote,
	deleteNote,
	getNote,
	unarchiveNote,
} from "../utils/network-data";
import {
	RiInboxArchiveFill,
	RiInboxUnarchiveFill,
	RiDeleteBin2Fill,
} from "react-icons/ri";
import Button from "../components/Action/Button";

const DetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [note, setNote] = React.useState(null);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		getNoteData(id);
	}, [id]);

	const getNoteData = async (id) => {
		getNote(id).then(({ data }) => {
			setNote(data);
			setLoading(false);
		});
	};

	const deleteHandler = (id) => {
		if (window.confirm("delete?")) {
			deleteNote(id).then(() => {
				alert("delete success");
				navigate("/home");
			});
		}
	};
	
	const archiveHandler = (id) => {
		if (window.confirm("archive?")) {
			archiveNote(id).then(() => {
				alert("note archived!");
				navigate("/home");
			});
		}
	};
	
	const unArchiveHandler = (id) => {
		if (window.confirm("un-archive?")) {
			unarchiveNote(id).then(() => {
				alert("note un-archived!");
				navigate("/home");
			});
		}
	};

	return (
		<div className="DetailPage">
			{loading ? (
				<div className="loader " />
			) : (
				<div className="NoteDetail">
					<div className="note-detail-content">
						<p className="createdAt">{ShowFormattedDate(note?.createdAt)}</p>
						<h3 className="title">{note?.title}</h3>
						<p className="body">{note?.body}</p>
					</div>
					<div className="buttons">
						{!note?.archived ? (
							<Button
								className="btn-archive"
								onClick={() => archiveHandler(id)}
								label={<RiInboxArchiveFill className="archived-icon" />}
							/>
						) : (
							<Button
								className="btn-archive"
								onClick={() => unArchiveHandler(id)}
								label={<RiInboxUnarchiveFill className="unarchived-icon" />}
							/>
						)}
						<Button
							className="btn-delete"
							onClick={() => deleteHandler(id)}
							label={<RiDeleteBin2Fill />}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default DetailPage;
