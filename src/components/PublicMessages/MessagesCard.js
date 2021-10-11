//Author(s): Emily Reed Purpose: display the public messages to the DOM in this format

import React from 'react';
import { useHistory } from 'react-router';
export const MessagesCard = ({ message, handleDeleteMessage, setMessages }) => {
    const history = useHistory();
    //return shows the message to the DOM
    return (
        <>
            <div className="message">
                <p>{message.user?.name}</p>
                <h3><span className="card-message">
                 {message.message}
                </span></h3>
                <p>Sent at: {message.timestamp}</p>
                <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                <button type="button"
                    onClick={() => history.push(`/messages/${message.id}/edit`)}>
                    Edit
                </button>
            </div>
        </>
    )
}

