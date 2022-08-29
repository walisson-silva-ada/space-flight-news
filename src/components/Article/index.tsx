import styles from "./styles.module.scss";
import postThumb from "../../assets/articleThumb1.png";
import { Link, useNavigate } from "react-router-dom";

export interface ArticleProps {
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
      state: { title, description, provider, thumbnail, url },
    });
  }

  return (
    <article className={styles.container}>
      <Link to={`/article/${title}`} className={styles.thumbnail}>
        <img src={thumbnail ?? postThumb} alt={title} />
      </Link>

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
