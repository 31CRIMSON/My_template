import React from 'react';
import '/src/pages/styles/Home.sass';
import Menu from "../components/Menu";

function Home() {
  return (
    <>
    <Menu />
       
      <div className='main'>
        <div className='Frame_I'>
          <div className='Frame_Heading_I'>Who I am?</div>
          <div className='Frame_Subheading_I'>My name is Dima</div>
          <div className='Frame_Paragraph_I'>
            I am Dima, a programmer with a deep passion for coding and technology. Since my early years, I've been fascinated by the intricate world of programming. This fascination led me to dive into various programming languages, mastering each one with dedication and enthusiasm. My journey from a novice to an expert has been filled with challenges, but my love for coding has always driven me to overcome them. Working with complex algorithms and developing innovative solutions is what I thrive on.
          </div>
        </div>
        <div className='ImageContainer_I'>
            <div className='Image_1'>
            <div className='Image_Desc_1'>
                <div className='Image_Text_1'>Dima is great</div>
                <button className='Image_Button_1'>Read Article</button>
              </div>
            </div>
            
              
            <div className='Image_2'>
            <div className='Image_Desc_2'>
                <div className='Image_Text_2'>Dima is awesome</div>
                <button className='Image_Button_2'>Read Article</button>
              </div>
            </div>
            <div className='Image_3'>
            <div className='Image_Desc_3'>
                <div className='Image_Text_3'>Dima is good</div>
                <button className='Image_Button_3'>Read Article</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;