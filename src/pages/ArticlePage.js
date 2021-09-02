import React from "react";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);
  if (!article) return <NotFoundPage />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <div>
      <h1>{article.title}</h1>
      <img className="article-image" src={article.image} alt="" />
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <h2 className="other-articles">Other Articles</h2>
      <ArticlesList articles={otherArticles} />
    </div>
  );
};
export default ArticlePage;
