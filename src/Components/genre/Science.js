import React, { useCallback, useEffect, useState } from "react";
import News from "../Box/News";
    
import LoadingSpinner from '../layout/LoadingSpinner';
const Science = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTaskHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=07b979eff87842f38de77f51bb349d10"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const data = await response.json();

      // to be written to load

      const transformedNews = data.articles.map((newsData) => {
        return {
          title: newsData.title,
          description: newsData.description,
          url: newsData.url,
          urlToImage: newsData.urlToImage,
          publishedAt: newsData.publishedAt,
          author: newsData.author,
        };
      });
    //   console.log(transformedNews);
      setNews(transformedNews);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);

  }, []);

  useEffect(() => {
    fetchTaskHandler();
  }, [fetchTaskHandler]);
if(error){
    return <p>Something Went Wrong.</p>;
}
  return <section>
    {isLoading && <LoadingSpinner/>}
    <News data = {news}/>
    </section>;
};
export default Science;
