import React from 'react';

const WorkItem = ({ 
  backgroundImage, 
  images, 
  title1, 
  title2, 
  colorClass,
  dataWork = "item" 
}) => {
  return (
    <div className="work_item" data-work={dataWork}>
      <div className="work_item-container" data-work="item-container">
        <div className="work_item-background" data-work="item-background">
          <img 
            src={backgroundImage.src} 
            loading="lazy" 
            sizes="100vw"
            srcSet={backgroundImage.srcSet}
            alt=""
          />
        </div>
        <div className="work_item-wrapper">
          <div className="work_item-images">
            {images.map((image, index) => (
              <div key={index} className="work_item-image" data-work="item-image">
                <div className="image-wrapper">
                  <img 
                    src={image.src} 
                    loading="lazy"
                    sizes="(max-width: 479px) 23vw, (max-width: 991px) 24vw, 25vw"
                    srcSet={image.srcSet}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="work_text">
            <div className="work_text-title">
              <div className="line-wrapper">
                <div className="line" data-line="true">{title1}</div>
              </div>
              <div className="line-wrapper">
                <div className="line text-right" data-line="true">
                  <span className={colorClass}>{title2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work_item-overlay" data-work="item-overlay"></div>
      </div>
    </div>
  );
};

export default WorkItem;