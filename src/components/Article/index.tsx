import styles from "./styles.module.scss";
import postThumb from "../../assets/articleThumb1.png";

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
  return (
    <article className={styles.container}>
      <a href={url} target="_blank" className={styles.thumbnail}>
        <img src={thumbnail ?? postThumb} alt={title} />
      </a>

      <div className={styles.articleInfoContainer}>
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>
          {description ??
            "Clique nesta notícia para ler o conteúdo completo..."}
        </p>
      </div>
    </article>
  );
}
