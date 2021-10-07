//Author(s): Emily Reed Purpose: gives user a form to edit an event

import React, { useState, useEffect } from "react"
import { getArticleById, update } from "../../modules/ArticleManager";
import { useParams, useHistory } from "react-router"

export const ArticleEditForm = () => {
  const [article, setArticle] = useState({ title: "", synopsis:"", url: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {articleId} = useParams();
  const history = useHistory();
//prepares data to be changed
  const handleFieldChange = evt => {
    const stateToChange = { ...article };
    stateToChange[evt.target.id] = evt.target.value;
    setArticle(stateToChange);
  };
//processes changed data
  const updateExistingArticle = evt => {
    evt.preventDefault()
    setIsLoading(true);

    
    const editedArticle = {
      id: articleId,
      name: article.title,
      synopsis: article.synopsis,
      url: article.url
    };

 update(editedArticle)
    .then(() => history.push("/articles")
    )
  }
//takes the new info and updates the previous data to the new data
  useEffect(() => {
  getArticleById(articleId)
      .then(article => {
        setArticle(article);
        setIsLoading(false);
      });
  }, [articleId]);
//return displays the edit form so an event can be edited
  return (
    <>
      <form>
        <fieldset>
        <label htmlFor="Title">Title </label>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={article.title}
            />
          
            <label htmlFor="synopsis">Synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="synopsis"
              value={article.synopsis}
            />
           
            <label htmlFor="url">Link</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="url"
              value={article.url}
            />
            
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingArticle}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}