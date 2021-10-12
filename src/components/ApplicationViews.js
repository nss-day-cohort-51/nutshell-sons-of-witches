
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

import { FriendsList } from "./friends/FriendsList"
import { ArticleForm } from "./Articles/ArticleForm"
import "./applicationViews.css"
import "./nav/NavBar.css"
import "./Articles/article.css"
import { MessageEditForm } from "./PublicMessages/MessagesEditForm"
import { MessageForm } from "./PublicMessages/MessagesForm"
import { MessageList } from "./PublicMessages/MessagesList"

export const ApplicationViews = () => {
  


  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("nutshell_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }

  return (
    <>
    <div className="dashboard">
    {/* <div>
    <h1>Dashboard</h1>
</div> */}
<Route exact path="/">
<ArticleList />
<EventList />
<TaskList />
<MessageList />

</Route>

      <Route exact path="/Articles">
        <ArticleList />
      </Route>
      
      <Route path="/friends">
        <FriendsList />
      </Route>
      
      <Route exact path="/messages">
        {/* Render the component for the messages */}
        {isAuthenticated ? <MessageList /> : <Redirect to="/login" />}
      </Route>
      <Route path="/messages/create">
        <MessageForm />
      </Route>
      <Route path="/messages/:messageId(\d+)/edit">
       {isAuthenticated ? <MessageEditForm /> : <Redirect to="/login" />}
      </Route>


      <Route exact path="/tasks">
        {/* Render the component for the user's tasks */}
        {isAuthenticated ? <TaskList /> : <Redirect to="/login" />}
    
      </Route>
      <Route exact path="/tasks/create">
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
      <Route exact path="/articles/create">
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
      </div>
    </>
  
  )
}
