import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <div>
    {articles.map((article, i) => (
      <Link
        className="article-list-item"
        key={i}
        to={`/articles/${article.name}`}
      >
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)} ...</p>
      </Link>
    ))}
  </div>
);

export default ArticlesList;
