import React from "react";
import Button from "./Button";
import { showFormattedDate } from "../utils/date-formatter";
import { Context } from "../context/Context";

const NoteItem = (props) => {
    const { themeValue } = React.useContext(Context);
	const { theme } = themeValue;
    
    return (
        <li className={`NoteItem ${theme}`}>
            <div className={`note-content ${theme}`}>
                <div className={`date-box ${theme}`}>
                    <p className="createdAt">{showFormattedDate(props.createdAt)}</p>
                </div>
                <div className={`content-box ${theme}`}>
                    <h3 className="title">{props.title}</h3>
                    <p className="body">{props.body}</p>
                </div>
            </div>
            <div className={`buttons ${theme}`}>
                <Button className="btn-archive" onClick={() => props.onArchive(props.id)} label={props.archived ? "UNARCHIVE" : "ARCHIVE"}/>
                <Button className="btn-delete" onClick={() => props.onDelete(props.id)} label="DELETE"/>
            </div>
        </li>
    )
}


export default NoteItem