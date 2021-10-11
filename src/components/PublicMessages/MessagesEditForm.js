//Author(s): Emily Reed Purpose: gives user a form to edit a message

import React, { useState, useEffect } from "react"
import {getMessageById, update} from "../../modules/MessageManager"
import { useParams, useHistory } from "react-router"

export const MessageEditForm = () => {
  const [message, setMessage] = useState({ userId: "", message: "", timestamp:""});
  const [isLoading, setIsLoading] = useState(false);

  const {messageId} = useParams();
  const history = useHistory();
//prepares data to be changed
  const handleFieldChange = event => {
    const stateToChange = { ...message };
    stateToChange[event.target.id] = event.target.value;
    setMessage(stateToChange);
  };
//processes changed data
  const updateExistingMessage= event => {
    event.preventDefault()
    setIsLoading(true);

    
    const editedMessage = {
        id: messageId,
      userId: message.userId,
      message: message.message,
      timestamp: message.timestamp
    };

 update(editedMessage)
    .then(() => history.push("/messages")
    )
  }
//takes the new info and updates the previous data to the new data
  useEffect(() => {
  getMessageById(messageId)
      .then(message => {
        setMessage(message);
        setIsLoading(false);
      });
  }, [messageId]);
//return displays the edit form so an message can be edited
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="message"
              value={message.message}
              name={message}
            />
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingMessage}
              className="btn btn-primary"
            >Send</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}