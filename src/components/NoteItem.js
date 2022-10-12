import React from "react";
import Button from "./Button";


const NoteItem = (props) => {
    return (
        <li className="NoteItem">
            <div className="note-content">
                <h1>{props.title}</h1>
                <p>{props.createdAt}</p>
                <p>{props.body}</p>
            </div>
            <div className="button">
                <Button className="btn-delete" onClick={() => props.onDelete(props.id)} label="DELETE"/>
                <Button className="btn-archive" onClick={() => props.onArchive(props.id)} label="ARCHIVE"/>
            </div>
        </li>
    )
}


export default NoteItem