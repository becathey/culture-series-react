import React from "react";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);
  if (!article) return <h1>Article does not exist!</h1>;
  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} alt="" />
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};
export default ArticlePage;
