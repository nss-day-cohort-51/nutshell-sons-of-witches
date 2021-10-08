//Author(s): Emily Reed Purpose: gives user a form to create an event

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addEvent } from '../../modules/EventManager';



export const EventForm = () => {
   
//useState will hold the event name, date, and location
    const [event, setEvent] = useState({
        name: "",
        date: "",
        location:""
    });



    const history = useHistory();
//makes copy of object and allows us to add our event, date, and location
    const handleControlledInputChange = (evt) => {
        const newEvent = { ...event }
        let selectedVal = evt.target.value
        if (evt.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newEvent[evt.target.id] = selectedVal
        // update state
        setEvent(newEvent)
    }


//saves the event and 'redirects' user back to event page to see events
    const handleClickSaveEvent = (evt) => {
        evt.preventDefault() //Prevents the browser from submitting the form
            addEvent(event)
                .then(() => history.push("/events"))
    }
//return gives us the event form and allows us to add an event
    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Name" value={event.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Event Date:</label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Date" value={event.timestamp} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Event Location: </label>
                    <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Location" value={event.location}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveEvent}>
                Save Event
            </button>
        </form>
    )
};