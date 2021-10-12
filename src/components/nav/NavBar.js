import React from "react"
import { Link } from "react-router-dom"
import { FriendsList } from "../friends/FriendsList"




export const NavBar = (props) => {
  return (
    <>
    <div className="sidebar">
      
        
          <FriendsList />
    
    </div>

  

   </>
  )
}
