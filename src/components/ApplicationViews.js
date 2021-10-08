import React, { useState} from "react"
import { Route } from "react-router-dom"
import { TaskForm } from "./tasks/TaskForm"
import { TaskList } from "./tasks/TaskList"
import { TaskEditForm } from "./tasks/TaskEditForm"
import { Redirect } from "react-router"
import { Login } from "./auth/Login"
import { Register} from "./auth/Register"


export const ApplicationViews = () => {
  const [ isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

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
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>


      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
        {isAuthenticated ? <TaskList /> : <Redirect to="/login" />}
        <TaskList />
      </Route>
      <Route path="/tasks/create">
        <TaskForm />
      </Route>
      <Route path="/tasks/:taskId(\d+)/edit">
        {isAuthenticated ? <TaskEditForm /> : <Redirect to="/login" />}
      </Route>


      <Route path="/events">
        {/* Render the component for the user's events */}
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
