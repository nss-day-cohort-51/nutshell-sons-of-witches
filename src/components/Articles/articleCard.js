import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const ArticleCard = ({ article, handleDeleteArticle }) => {
  const history = useHistory();
  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

    //return shows the event to the DOM

    return (
      <div className="card">
        
    
       <div className="cardHeader">
        <h3 className="card-title"><span>{article.title}</span>
        </h3>
        
        <div className="synopsis">
            <p>{article.synopsis}</p>
            <a href={article.url}>{article.url}</a>
            </div>
            
     </div>
     {article.userId === currentUser && 
     
     <div className="buttons">
  
  
    <button className="button-7" type="button" onClick={() => handleDeleteArticle(article.id)}>
  delete </button>

  <button className="button-7" type="button" onClick={() => history.push(`articles/${article.id}/edit`)}>
  edit
  </button>
  </div>}
     
     </div>

      




    );
  };