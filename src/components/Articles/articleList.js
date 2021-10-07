import React, {useState, useEffect} from 'react';
import { getAllArticles } from '../modules/ArticleManager';
import { ArticleCard } from './articleCard';
import { deleteArticle} from '../modules/ArticleManager';
import {useHistory} from 'react-router-dom'



export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const history = useHistory();


  const getArticles = () => {
    return getAllArticles().then(articlesFromAPI => {
      // We'll do something more interesting with this data soon.
     
     
      setArticles(articlesFromAPI);
    });
  };

  const handleDeleteArticle = id => {
    deleteArticle(id)
    .then(() => getAllArticles().then(setArticles));
  };

  useEffect(() => {
    console.log("useEffect Invoked")
    getArticles();
  }, []);

        return (
   <>
        <div className="container-cards">
        <section className="section-content">
        <button className="button-74" role="button" onClick={() => {history.push("/articles/create")}}> 
      <span className="text"> Post Article</span> </button>
      </section> 
    </div>

        <div className="container-cards">
        {articles.map(article =>
          <ArticleCard
            key={article.id}
            article={article}
            handleDeleteArticle={handleDeleteArticle} />)}
      </div>
   </>
      



  )

};
