import React from "react";
import '/src/pages/styles/Article.sass';
import Menu from "../components/Menu";

function Article() {
    return (
        <>
            <Menu />
        
            <div className="main">
                <div className="Frame_A">
                    <div className="Frame_Heading_A">Why Dima is great</div>
                    <div className="Frame_Paragraph_A">As Dima, I believe my greatest strength lies in my relentless pursuit of knowledge and my ability to adapt to new technologies. My passion for programming goes beyond just writing code; it's about solving complex problems and making a tangible impact. I thrive on challenges and constantly seek to improve my skills. My dedication to my craft has led me to master various programming languages and technologies, enabling me to contribute significantly to every project I undertake. My commitment to excellence and my ability to work effectively both independently and as part of a team make me a valuable asset in the tech industry. My journey in programming is not just a career; it's a continuous adventure in learning and growth.</div>
                </div>
                <div className="ImageContainer_A">
                    <div className="Image_A"></div>
                </div>
            </div>
        </>
    );
}

export default Article;