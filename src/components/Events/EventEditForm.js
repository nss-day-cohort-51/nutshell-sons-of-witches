//Author(s): Emily Reed Purpose: gives user a form to edit an event

import React, { useState, useEffect } from "react"
import {getEventById, update} from "../../modules/EventManager"
import { useParams, useHistory } from "react-router"

export const EventEditForm = () => {
  const [event, setEvent] = useState({ name: "", date:"", location: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {eventId} = useParams();
  const history = useHistory();
//prepares data to be changed
  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };
//processes changed data
  const updateExistingEvent = evt => {
    evt.preventDefault()
    setIsLoading(true);

    
    const editedEvent = {
      id: eventId,
      name: event.name,
      date: event.timestamp,
      location: event.location
    };

 update(editedEvent)
    .then(() => history.push("/events")
    )
  }
//takes the new info and updates the previous data to the new data
  useEffect(() => {
  getEventById(eventId)
      .then(event => {
        setEvent(event);
        setIsLoading(false);
      });
  }, [eventId]);
//return displays the edit form so an event can be edited
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
              id="name"
              value={event.name}
            />
            <label htmlFor="name">Event name</label>

            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={event.date}
            />
            <label htmlFor="date">Date</label>

              <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={event.location}
            />
            <label htmlFor="location">Event Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEvent}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}