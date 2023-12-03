import React from "react";
import '/$styles/Article.sass';

function SecondArticle() {
    return (
        <div className="article">
            <div className="article__frame">
                <div className="article__frame-heading">Why Dima is awesome</div>
                <div className="article__frame-paragraph">As Dima, I believe my greatest strength lies in my relentless pursuit of knowledge and my ability to adapt to new technologies. My passion for programming goes beyond just writing code; it's about solving complex problems and making a tangible impact. I thrive on challenges and constantly seek to improve my skills. My dedication to my craft has led me to master various programming languages and technologies, enabling me to contribute significantly to every project I undertake. My commitment to excellence and my ability to work effectively both independently and as part of a team make me a valuable asset in the tech industry. My journey in programming is not just a career; it's a continuous adventure in learning and growth.</div>
            </div>
            <div className="article__image-container">
                <div className="article__image"></div>
            </div>
        </div>
    );
}

export default SecondArticle;
