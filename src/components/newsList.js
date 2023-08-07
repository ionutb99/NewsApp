import axios from "axios";
import React, { useEffect, useState } from "react";
import { NewsItem } from "./newsItem";

export const NewsList = ({query }) => {
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=b4175b0e0362495a8afdd35251a2433e`
      );
      console.log(response.data.articles);
      setArticles(response.data.articles);
    };

    getArticles();
  }, [query]);


  return (
    <div>
     {articles && articles.map((article, idx) => {
      return (
        <NewsItem 
        key={idx}
        title={article.title} 
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage} />
      )
     })}
    </div>
  );
};
  

