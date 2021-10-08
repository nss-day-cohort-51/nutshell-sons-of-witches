import React from "react";
import { useHistory } from "react-router-dom";
import "./article.css"
export const ArticleCard = ({ article, handleDeleteArticle }) => {
  const history = useHistory();


  return (
    <div className="card">
        
        <h3 className="card-title"><span>{article.title}</span>
        </h3>

        <div className="synopsis">
        <p>Synopsis: {article.synopsis}</p>
        </div>
        <div><a href="{article.url}">{article.url}</a></div>
        
        <div className="buttons">
        <button className="button-74" type="button" onClick={() => handleDeleteArticle(article.id)}>
          delete
        </button>
        <button className="button-74" type="button" onClick={() => history.push(`articles/${article.id}/edit`)}>
          edit
        </button>
        </div>
       

    </div>
  );
};