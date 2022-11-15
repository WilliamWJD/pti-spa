import { useState } from 'react';
import './App.css';
import { Article } from "./components/Article"
import dadosArticle from '../dados.json';
function App() {
  const [dados, setDados] = useState(dadosArticle);
  return (
    <div className="container">
      {dados.map(article => (
        <Article article={article} key={article.id} />
      ))}
    </div>
  )
}
export default App
