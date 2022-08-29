import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { Article } from "../../components/Article";

import styles from "../../styles/containers.module.scss";

interface INews {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  url: string;
  newsSite: string;
}

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([] as INews[]);

  async function loadNewsFromAPI() {
    setIsLoading(true);
    // const response = await fetch("./articles.json");
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles "
      );

      const data = await response.json();

      console.log(data);
      setNews(data);
    } catch (err) {
      console.log("Erro:", err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadNewsFromAPI();
  }, []);

  return (
    <>
      {/* <button onClick={loadNewsFromAPI}>Refresh</button> */}

      <section className={styles.pageContainer}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ContentLoader
                key={index}
                viewBox="0 0 380 70"
                backgroundColor="#333"
                style={{ padding: "0 2rem 2rem" }}
              >
                <rect x="0" y="0" rx="5" ry="5" width="120" height="70" />
                <rect x="130" y="5" rx="3" ry="4" width="300" height="15" />
                <rect x="130" y="28" rx="3" ry="3" width="250" height="10" />
                <rect x="130" y="45" rx="3" ry="3" width="250" height="20" />
              </ContentLoader>
            ))
          : news.map((article) => {
              return (
                <Article
                  key={article.id}
                  title={article.title}
                  provider={article.newsSite}
                  description={article.summary}
                  thumbnail={article.imageUrl}
                  url={article.url}
                />
              );
            })}
      </section>
    </>
  );
}
