import React from 'react';
import { Link } from 'react-router-dom';
import '/$styles/Home.sass';






  
function Home() {

  return (
    <div className='main'>
      <div className='frame'>
        <div className='frame__heading'>Who I am?</div>
        <div className='frame__subheading'>My name is Dima</div>
        <div className='frame__paragraph'>
        I am Dima, a programmer with a deep passion for coding and technology. Since my early years, I've been fascinated by the intricate world of programming. This fascination led me to dive into various programming languages, mastering each one with dedication and enthusiasm. My journey from a novice to an expert has been filled with challenges, but my love for coding has always driven me to overcome them. Working with complex algorithms and developing innovative solutions is what I thrive on. 
        </div>
      </div>

      <div className='image-container'>
        <div className='image image_1'>
          <div className='image__desc'>
            <div className='image__text'>Dima is great</div>
            <button className='image__button'>
            <Link to="/article-1" className="image_button-link">Read Article</Link>
            </button>
          </div>
        </div>

        <div className='image image_2'>
          <div className='image__desc'>
            <div className='image__text'>Dima is awesome</div>
            <button className='image__button'>
            <Link to="/article-2" className="image_button-link">Read Article</Link>
            </button>
          </div>
        </div>

        <div className='image image_3'>
          <div className='image__desc'>
            <div className='image__text'>Dima is good</div>
            <button className='image__button'>
            <Link to="/article-3" className="image_button-link">Read Article</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
