import React from "react";
import '/$styles/Article.sass';
import { useState, useEffect } from 'react';
import axios  from "axios";

function SecondArticle() {


    const [data, setData] = useState({
        title : '',
        decription : '',
        path: '',
      });
      
      useEffect(() => {
        axios.get('http://localhost:3000/data')
          .then((response) => {
            console.log(response.data);
            setData(response.data.data);
          })
          .catch((error) => {
            console.error("Error getting data: " + error);
          });
      }, []);



    return (
        <div className="article">
            <div className="article__frame">
                <div className="article__frame-heading">{data.title}</div>
                <div className="article__frame-paragraph">{data.decription}</div>
            </div>
            <div className="article__image-container">
                <img src={data.path} className="article__image"></img>
            </div>
        </div>
    );
}

export default SecondArticle;
