import React from 'react';

const Footer = () => {
  return (
    <section className="footer_section sticky">
      <div className="footer_container">
        <div className="footer_image-wrapper">
          <img 
            src="https://picsum.photos/1920/1080?random=10" 
            loading="lazy" 
            sizes="100vw"
            srcSet="https://picsum.photos/500/300?random=10 500w, https://picsum.photos/800/450?random=10 800w, https://picsum.photos/1080/600?random=10 1080w, https://picsum.photos/1600/900?random=10 1600w, https://picsum.photos/2000/1125?random=10 2000w, https://picsum.photos/3519/1980?random=10 3519w"
            alt="Beautiful landscape" 
            className="footer_image"
          />
        </div>
        <div className="footer_texts">
          <div className="line-wrapper">
            <div data-line="true">
              <span className="color-0">SCROLL</span>
            </div>
          </div>
          <div className="line-wrapper">
            <div className="line text-center">MISSION</div>
          </div>
          <div className="line-wrapper">
            <div className="line text-right" data-line="true">
              <span className="color-0">COMPLETE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;