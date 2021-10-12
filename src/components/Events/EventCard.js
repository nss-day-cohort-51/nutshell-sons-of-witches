//Author(s): Emily Reed Purpose: display the events to the DOM

import React from 'react';
import { useHistory } from 'react-router';

export const EventCard = ({ event, handleDeleteEvent }) => {
    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

    //return shows the event to the DOM
    return (
        <>
            <div className="card">
                <h3><span className="card-eventname">
                    Event: {event.name}
                </span></h3>
                <p>Event Date: {event.date}</p>
                <p>Event Location: {event.location}</p>
                <p>Event Time: {event.time}</p>
                {event.userId === currentUser && 
                <div className="buttons">
                <button className="button-7"  type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                <button className="button-7" type="buttson"
                    onClick={() => history.push(`/events/${event.id}/edit`)}>
                    Edit
                </button>
                <button className="button-7" type="button">Weather</button>
            </div>}
            </div>
        </>
    )
}




