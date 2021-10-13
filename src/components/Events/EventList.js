//Author(s): Emily Reed Purpose: shows the list of all events on the dom

import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { getAllEvents, update, deleteEvent } from '../../modules/EventManager'
import { useHistory } from 'react-router';

export const EventList = () => {
  const [events, setEvents] = useState([]);
  const history = useHistory();
  const getEvents = () => {
    // After the data comes back from API, we
    //  use the setEvents function to update state
    return getAllEvents().then(eventsFromAPI => {
      setEvents(eventsFromAPI)
    });
  };
//function deletes a single event and then re-renders to display events still in API
  const handleDeleteEvent = id => {
    deleteEvent(id)
      .then(() => getAllEvents().then(setEvents));
  };

  //first render
  useEffect(() => {
    getEvents();
  }, []);

  
  


  // Finally we use .map() to "loop over" the events array to show a list of event cards
  //return shows a button to add an event, displays the event cards in a list, and shows a button to delete events
 
  return (
    <>
    <section className="section-content">
   

    <div className="card-holder">
    <div className="cardHolderHeader">
  
    <button type="button"
      className="button-7"
      onClick={() => {history.push("/events/create")}}>
      Add Event
  </button>
  </div>
  <div id="event-card-holder">
      { 
      events.map(event => <EventCard key={event.id}event={event} handleDeleteEvent={handleDeleteEvent}/>)}
</div>
    </div>
    

</section>
</>
  );
};