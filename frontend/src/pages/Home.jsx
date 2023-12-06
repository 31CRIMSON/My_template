import { Link } from "react-router-dom";
import { useData } from "$context/DataContext";
import "$styles/Home.sass";

function Home() {
  const { data } = useData();


  const imageElements = [];

  data.forEach((item) => {
    imageElements.push(
      <div key={item.page_id} className={`image image_${item.page_id}`}>
        <img src={`/src/images/${item.path}`} className="image__img" />
        <div className="image__desc">
          <div className="image__text">{item.title}</div>
          <button className="image__button">
            <Link to={`/article/${item.page_id}`} className="image_button-link">
              Read Article
            </Link>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="main">
      <div className="frame">
        <div className="frame__heading">Who I am?</div>
        <div className="frame__subheading">My name is Dima</div>
        <div className="frame__paragraph">
          I am Dima, a programmer with a deep passion for coding and technology.
          Since my early years, I've been fascinated by the intricate world of
          programming. This fascination led me to dive into various programming
          languages, mastering each one with dedication and enthusiasm. My
          journey from a novice to an expert has been filled with challenges,
          but my love for coding has always driven me to overcome them. Working
          with complex algorithms and developing innovative solutions is what I
          thrive on.
        </div>
      </div>

      <div className="image-container">{imageElements}</div>
    </div>
  );
}

export default Home;
