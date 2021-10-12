import React from "react"
import { Link } from "react-router-dom"
import { FriendsList } from "../friends/FriendsList"




export const NavBar = (props) => {
  return (
    <>
    <div className="sidebar">


          <Link className="#articles" to="/Articles">Articles</Link>

          <Link className="#news" to="/messages">Messages</Link>
    
          <Link className="#tasks" to="/tasks">Tasks</Link>
    
      
          <Link className="#events" to="/events">Events</Link>
          <FriendsList />
    
    </div>

  

   </>
  )
}
