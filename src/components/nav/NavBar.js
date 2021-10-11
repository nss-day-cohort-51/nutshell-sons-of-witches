import React from "react"
import { Link } from "react-router-dom"
import { ArticleList } from "../Articles/articleList"




export const NavBar = (props) => {
  return (
    <div className="sidebar">


          <Link className="#articles" to="/Articles">Articles</Link>

          <Link className="#friends" to="/friends">Friends</Link>

          <Link className="#news" to="/messages">Messages</Link>
    
          <Link className="#tasks" to="/tasks">Tasks</Link>
    
      
          <Link className="#events" to="/events">Events</Link>
   
    
    </div>

  )
}
