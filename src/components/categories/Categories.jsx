import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from '../../mocks/categorias.json';
import { Link } from "react-router-dom";

const Categories = () => {
  const { data, loading } = useAsyncMock(categories)

  if (loading) return <CircularProgress />

  return (<div className="container">
    <div className="home-container">
      <div className="home-content">
        <h1>Acabas de llegar a IndumentariaLRM</h1>
        <p>La mejor ropita del mundo...</p>
      </div>
    </div>
    <div className="categories-container">
      <Typography variant="h3" style={{ color: "#8f8C8C" }}>
        ¿Qué estas buscando hoy?
      </Typography>
      {data.map((category) => (
        <Card key={category.category} className="category-card">
          <CardContent component={Link} to={`/category/${category.category}`} className="category-link">
            <Typography className="category-text">{category.category}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>);
}

export default Categories;