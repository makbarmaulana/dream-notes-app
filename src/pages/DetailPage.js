import React from "react";
import { Context } from "../context/context";
import { useParams, useLocation, Link } from "react-router-dom";
import { useFetchNotes } from "../hooks/useFetchNotes";
import { ShowFormattedDate } from "../utils/date_formatter";
import { RiInboxArchiveFill, RiInboxUnarchiveFill, RiDeleteBin2Fill, RiArrowLeftCircleLine } from "react-icons/ri";
import { detailPage } from "../utils/lang_properties";
import Button from "../components/Action/Button";
import Header from "../components/Header";

const DetailPage = () => {
	const { locale } = React.useContext(Context);
	const { id } = useParams();
	const { pathname } = useLocation();
	const { notes, loading, deleteHandler, archiveHandler, unArchiveHandler } =
		useFetchNotes(pathname, id);

	return (
		<div className="DetailPage">
			<Header />
			{loading ? (
				<div className="NoteDetail">
					<div className="loader " />
				</div>
			) : notes?.id !== id ? (
				<div className="NoteDetail">
					<p className="notes-empty">{detailPage[locale].notFound}</p>
				</div>
			) : (
				<div className="NoteDetail">
					<div className="note-detail-content">
						<Link to={notes?.archived ? "/archive" : "/home"}>
							<RiArrowLeftCircleLine className="back-icons" />
						</Link>
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
