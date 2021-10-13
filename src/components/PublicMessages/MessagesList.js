//Author(s): Emily Reed Purpose: shows the list of all messages on the dom

import React, { useState, useEffect } from 'react';
import { MessagesCard } from './MessagesCard';
import { getAllMessages, deleteMessage } from '../../modules/MessageManager'
import { useHistory } from 'react-router';

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const history = useHistory();
  const getMessages = () => {
    // After the data comes back from API, we
    //  use the setMessages function to update state
    return getAllMessages().then(messagesFromAPI => {
      setMessages(messagesFromAPI)
    });
  };
//function deletes a single message and then re-renders to display messages still in API
  const handleDeleteMessage = id => {
    deleteMessage(id)
      .then(() => getAllMessages().then(setMessages));
  };
  

  //first render
  // put "messages" in dependancy array for demoing
  useEffect(() => {
    getMessages();
  }, []);

  
  


  // Finally we use .map() to "loop over" the messages array to show a list of message cards
  //return shows a button to add a message, displays the message cards in a list, and shows a button to delete messages
 
  return (
    <>
    <section className="card-holder">
    <div className="cardHolderHeader">
  <button type="button"
      className="button-7"
      onClick={() => {history.push("/messages/create")}}>
      Add Message
  </button>
  </div>


    <div className="container-cards">
      { 
      messages.map(message => <MessagesCard key={message.id}message={message} handleDeleteMessage={handleDeleteMessage} setMessages={setMessages} />)}

    </div>
    </section>
    </>
  );
};