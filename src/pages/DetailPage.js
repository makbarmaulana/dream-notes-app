import React from "react";
import { ShowFormattedDate } from "../utils/date-formatter";
import { useParams, useLocation } from "react-router-dom";
import {
	RiInboxArchiveFill,
	RiInboxUnarchiveFill,
	RiDeleteBin2Fill,
} from "react-icons/ri";
import Button from "../components/Action/Button";
import { Context } from "../context/Context";
import { useFetchAPI } from "../hooks/useFetchAPI";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
	const { locale } = React.useContext(Context);
	const navigate = useNavigate();
	const { id } = useParams();
	const { pathname } = useLocation();
	const { notes, loading, deleteHandler, archiveHandler, unArchiveHandler } =
		useFetchAPI(pathname, id);

	return (
		<div className="DetailPage">
			{loading ? (
				<div className="loader " />
			) : (
				<div className="NoteDetail">
					<div className="note-detail-content">
						<p className="createdAt">
							{ShowFormattedDate(notes?.createdAt, locale)}
						</p>
						<h3 className="title">{notes?.title}</h3>
						<p className="body">{notes?.body}</p>
					</div>
					<div className="buttons">
						{!notes?.archived ? (
							<Button
								className="btn-archive"
								onClick={() => {
									archiveHandler(id);
									navigate("/archive");
								}}
								label={<RiInboxArchiveFill className="archived-icon" />}
							/>
						) : (
							<Button
								className="btn-archive"
								onClick={() => {
									unArchiveHandler(id);
									navigate("/home");
								}}
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
