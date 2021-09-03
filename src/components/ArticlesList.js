import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <div>
    {articles.map((article, i) => (
      <Link
        className="article-list-link"
        key={i}
        to={`/articles/${article.name}`}
      >
        <div className="article-list-item">
          <img src={article.image} alt="" />
          <div>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)} ...</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default ArticlesList;
