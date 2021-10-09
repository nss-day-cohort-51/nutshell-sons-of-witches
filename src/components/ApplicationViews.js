
import { TaskForm } from "./tasks/TaskForm"
import { TaskList } from "./tasks/TaskList"
import { TaskEditForm } from "./tasks/TaskEditForm"
import { ArticleList } from "./Articles/articleList"
import React, {useState} from "react"
import { Route,Redirect } from "react-router-dom"
import { EventList } from "./Events/EventList"
import { EventForm } from "./Events/EventForm"
import { EventEditForm } from "./Events/EventEditForm"
import { ArticleEditForm } from "./Articles/ArticleEditForm"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { UserList } from "./friends/Userlist"
import { FriendsList } from "./friends/FriendsList"
import { ArticleForm } from "./Articles/ArticleForm"
import "./applicationViews.css"

export const ApplicationViews = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("nutshell_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }

  return (
    <>
    <div className="dashboard">
<Route exact path="/">
<ArticleList />
<EventList />
</Route>
</div>
      <Route exact path="/Articles">
        <ArticleList />
      </Route>
      <Route exact path="/friends">
        <UserList />
      </Route>
      <Route path="/friends">
        <FriendsList />
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

      <Route exact path="/events">
        {/* Render the component for the user's events */}
        {isAuthenticated ? <EventList /> : <Redirect to="/login" />}
      </Route>
      <Route path="/events/create">
        <EventForm />
      </Route>
      <Route path="/articles/create">
        <ArticleForm />
      </Route>
      
      <Route path="/events/:eventId(\d+)/edit">
       {isAuthenticated ? <EventEditForm /> : <Redirect to="/login" />}
      </Route>
      
      <Route path="/articles/:articleId(\d+)/edit">
       {isAuthenticated ? <ArticleEditForm /> : <Redirect to="/login" />}
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
