import React, {useState} from "react"
import { Route,Redirect } from "react-router-dom"
import { EventList } from "./Events/EventList"
import { EventForm } from "./Events/EventForm"
import { EventEditForm } from "./Events/EventEditForm"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { UserList } from "./friends/Userlist"

export const ApplicationViews = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("nutshell_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        <UserList />
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>

      <Route exact path="/events">
        {/* Render the component for the user's events */}
        {isAuthenticated ? <EventList /> : <Redirect to="/login" />}
      </Route>
      <Route path="/events/create">
        <EventForm />
      </Route>
      <Route path="/events/:eventId(\d+)/edit">
       {isAuthenticated ? <EventEditForm /> : <Redirect to="/login" />}
      </Route>

      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>
    </>
  )
}
