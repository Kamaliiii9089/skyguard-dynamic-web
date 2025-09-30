import React from 'react';

const Hero = () => {
  return (
    <section className="hero_section sticky">
      <div className="hero_container">
        <div className="hero_image-wrapper">
          <img 
            src="https://picsum.photos/1920/1080?nature,architecture&random=10" 
            loading="lazy" 
            sizes="100vw"
            srcSet="https://picsum.photos/500/300?nature,architecture&random=10 500w, https://picsum.photos/800/450?nature,architecture&random=10 800w, https://picsum.photos/1080/600?nature,architecture&random=10 1080w, https://picsum.photos/1600/900?nature,architecture&random=10 1600w, https://picsum.photos/2000/1125?nature,architecture&random=10 2000w, https://picsum.photos/2600/1460?nature,architecture&random=10 2600w, https://picsum.photos/4140/2330?nature,architecture&random=10 4140w"
            alt="Professional roofing project" 
            className="hero_image"
          />
        </div>
        <div className="hero_texts">
          <div className="line-wrapper">
            <div className="line-wrapper">
              <div className="line" data-line="true">PROTECTING</div>
            </div>
          </div>
          <div className="line-wrapper">
            <div className="line text-center">
              <span className="color-0">YOUR HOME</span>
            </div>
          </div>
          <div className="line-wrapper">
            <div className="line text-right" data-line="true">WITH EXCELLENCE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;