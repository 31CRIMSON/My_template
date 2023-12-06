import React from "react";
import "$styles/Article.sass";
import { useParams } from "react-router-dom";
import path from "path";
import { useData } from "../context/DataContext";
import { useEffect } from "react";

function Article() {
  const { page_id } = useParams();
  const { data, fetchData } = useData();

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  const articleData = data.find((item) => item.page_id === parseInt(page_id));

  if (!articleData) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article">
      <div className="article__frame">
        <div className="article__frame-heading">{articleData.title}</div>
        <div className="article__frame-paragraph">{articleData.decription}</div>
      </div>
      <div className="article__image-container">
        <img
          src={path.join("/src/images", String(articleData.path))}
          className="article__image"
          alt={articleData.title}
        />
      </div>
    </div>
  );
}

export default Article;
