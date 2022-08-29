import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArticleProps } from "../../components/Article";
import containerStyles from "../../styles/containers.module.scss";

export function ArticlePage() {
  // Hooks que existem dentro do react-router-dom
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const articleInfo = location.state;

  if (!articleInfo) {
    return <h1>Not found</h1>;
  }

  const { title, description, provider, url, thumbnail } =
    articleInfo as ArticleProps;

  return (
    <main className={containerStyles.pageContainer}>
      <button onClick={() => navigate(-1)}>Voltar</button>

      <h1>{title}</h1>
      <p>{description}</p>

      <strong>{provider}</strong>
      <img width="100%" src={thumbnail} alt={title} />

      <a href={url} target="_blank">
        View more
      </a>
    </main>
  );
}
