import React from "react";
import { Route } from "react-router-dom";
import { ArticleList } from "./components/Articles/articleList";
import { EventList } from "./components/Events/EventList";

export const componentList = () => (
  <>

  <Route>
  <ArticleList />
 </Route>


 <Route> 
   <EventList /> 
   </Route>
</>
      




    );
  