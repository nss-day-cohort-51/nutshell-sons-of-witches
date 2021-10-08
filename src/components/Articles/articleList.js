import React, {useState, useEffect} from 'react';
import {getAllArticles, deleteArticle} from '../../modules/ArticleManager'
import { ArticleCard } from './articleCard';
import {useHistory} from 'react-router-dom'
import "./article.css"


export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const history = useHistory();


  const getArticles = () => {
    return getAllArticles().then(articlesFromAPI => {
      // After the data comes back from API, we
    //  use the setEvents function to update state
     
      setArticles(articlesFromAPI);
    });
  };
//function deletes a single event and then re-renders to display events still in API
  const handleDeleteArticle = id => {
    deleteArticle(id)
    .then(() => getAllArticles().then(setArticles));
  };

  useEffect(() => {
    console.log("useEffect Invoked")
    getArticles();
  }, []);
  // Finally we use .map() to "loop over" the events array to show a list of event cards

  //return shows a button to add an event, displays the event cards in a list, and shows a button to delete events

        return (
   <>
        <div className="container-cards">
        <section className="section-content">
        <button className="button-74" role="button" onClick={() => {history.push("/articles/create")}}> 
      <span className="text"> Post Article</span> </button>
      </section> 
    </div>

        <div className="card-holder">
        {articles.map(article =>
          <ArticleCard
            key={article.id}
            article={article}
            handleDeleteArticle={handleDeleteArticle} />)}
      </div>
   </>
      



  )

};
