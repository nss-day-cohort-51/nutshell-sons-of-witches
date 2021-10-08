//Author(s): Emily Reed Purpose: gives user a form to create an event

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addArticle } from '../../modules/ArticleManager';

export const ArticleForm = () => {
   

//useState will hold the event name, date, and location
    const [article, setArticle] = useState({
    
        title: "",
        synopsis: "",
        url:""
    });

    

    

    const history = useHistory();
//makes copy of object and allows us to add our event, date, and location
    const handleControlledInputChange = (evt) => {
        const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
        const newArticle = { ...article }
        let selectedVal = evt.target.value
        if (evt.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newArticle[evt.target.id] = selectedVal
        // update state
        newArticle.userId = currentUser
        setArticle(newArticle)
    }


//saves the event and 'redirects' user back to event page to see events
    const handleClickSaveArticle = (evt) => {
        // const currentUser = parsedInt(sessionStorage.getItem("nutshell_user"))
        

        evt.preventDefault() //Prevents the browser from submitting the form

            addArticle(article)
                .then(() => history.push("/articles"))
    }
//return gives us the event form and allows us to add an event
    return (
        <form className="articleForm">
           <div className="cardHeader"></div>
            <h2 className="articleForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article Title" value={article.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Synopsis</label>
                    <textarea  type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Synopsis" value={article.synopsis} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">Link </label>
                    <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Link" value={article.url}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveArticle}>
                Save Article
            </button>
        </form>
    )
};