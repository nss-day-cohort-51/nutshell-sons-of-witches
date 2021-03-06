//Author(s): Emily Reed Purpose: display the public messages to the DOM in this format

import React from 'react';
import { useHistory } from 'react-router';
export const MessagesCard = ({ message, handleDeleteMessage, setMessages }) => {
    const history = useHistory();
    //return shows the message to the DOM
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
    return (
        <>
            <div className="card">
                <p>{message.user?.name}</p>
                <h3><span className="card-message">
                 {message.message}
                </span></h3>
                <p>Sent at: {message.timestamp}</p>

                {message.userId === currentUser && <div className="buttons">
  
  
    <button className="button-7" type="button" onClick={() => handleDeleteMessage(message.id)}>
  delete </button>

  <button className="button-7" type="button" onClick={() => history.push(`messages/${message.id}/edit`)}>
  edit
  </button>
  </div>}

            </div>
        </>
    )
}
