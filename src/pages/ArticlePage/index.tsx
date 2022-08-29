import { useLocation, useNavigate, useParams } from "react-router-dom";
import containerStyles from "../../styles/containers.module.scss";

export function ArticlePage() {
  // Hooks que existem dentro do react-router-dom
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(params);
  console.log(location);

  return (
    <main className={containerStyles.pageContainer}>
      <button onClick={() => navigate(-1)}>Voltar</button>

      <h1>Article</h1>
    </main>
  );
}
