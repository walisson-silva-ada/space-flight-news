import styles from "./styles.module.scss";
import postThumb from "../../assets/articleThumb1.png";
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  title: string;
  description?: string;
  provider: string;
  thumbnail?: string;
  url: string;
}

export function Article({
  title,
  provider,
  description,
  thumbnail,
  url,
}: ArticleProps) {
  const navigate = useNavigate();

  function redirectToArticlePage() {
    navigate(`/article/${title}`, {
      state: JSON.stringify({ title, description, provider, thumbnail, url }),
    });
  }

  return (
    <article className={styles.container}>
      <a href={`/article/${title}`} className={styles.thumbnail}>
        <img src={thumbnail ?? postThumb} alt={title} />
      </a>

      <div className={styles.articleInfoContainer}>
        <h2 onClick={redirectToArticlePage}>{title}</h2>
        <h3>{provider}</h3>
        <p>
          {description ??
            "Clique nesta notícia para ler o conteúdo completo..."}
        </p>
      </div>
    </article>
  );
}
