import React from "react";
import Button from "./Button";
import { showFormattedDate } from "../utils/date-formatter";

const NoteItem = (props) => {
    return (
        <li className="NoteItem">
            <div className="note-content">
                <div className="date-box">
                    <p className="createdAt">{showFormattedDate(props.createdAt)}</p>
                </div>
                <div className="content-box">
                    <h3 className="title">{props.title}</h3>
                    <p className="body">{props.body}</p>
                </div>
            </div>
            <div className="buttons">
                <Button className="btn-archive" onClick={() => props.onArchive(props.id)} label={props.archived ? "UNARCHIVE" : "ARCHIVE"}/>
                <Button className="btn-delete" onClick={() => props.onDelete(props.id)} label="DELETE"/>
            </div>
        </li>
    )
}


export default NoteItem