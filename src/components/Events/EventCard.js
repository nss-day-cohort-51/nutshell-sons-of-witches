//Author(s): Emily Reed Purpose: display the events to the DOM

import React from 'react';
import { useHistory } from 'react-router';
export const EventCard = ({ event, handleDeleteEvent }) => {
    const history = useHistory();
    //return shows the event to the DOM
    return (

        <div className="card">
            <div className="card-content">
                <h3><span className="card-eventname">
                    Event: {(event.name)}
                </span></h3>
                <p>Event Date: {event.timestamp}</p>
                <p>Event Location: {event.location}</p>
                <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                <button type="button"
                    onClick={() => history.push(`/events/${event.id}/edit`)}>
                    Edit
                </button>
                <button type="button">Show Weather</button>
            </div>
        </div>
    );
}