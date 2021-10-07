import React from "react";
import { Link } from 'react-router-dom'
import { useHistory, } from "react-router-dom";

export const ArticleCard = ({ article, handleDeleteArticle }) => {

  const history = useHistory();

  return (
    <div className="card">
      <div className="card-content">
        <h3>
         <span className="card-title">{article.title}</span>
        </h3>
        <p>Synopsis: {article.synopsis}</p>
        <button type="button" onClick={() => handleDeleteArticle(article.id)}>
          delete
        </button>
        
         <Link to={`/Articles/${article.id}`}>
          <button>Details</button>
        </Link> 

        <button type="button"
  onClick={() => history.push(`/articles/${article.id}/edit`)}>
  Edit
</button>

      </div>
    </div>
  );
};

//   <picture>
//   <img src={require('./dog.svg')} alt="My Dog" />
// </picture>
