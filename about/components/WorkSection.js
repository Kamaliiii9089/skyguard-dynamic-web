import React from 'react';
import WorkItem from './WorkItem';

const WorkSection = () => {
  const workItems = [
    {
      backgroundImage: {
        src: "https://picsum.photos/1920/1080?architecture&random=30",
        srcSet: "https://picsum.photos/500/300?architecture&random=30 500w, https://picsum.photos/800/450?architecture&random=30 800w, https://picsum.photos/1080/600?architecture&random=30 1080w, https://picsum.photos/1600/900?architecture&random=30 1600w, https://picsum.photos/2000/1125?architecture&random=30 2000w, https://picsum.photos/4160/2340?architecture&random=30 4160w"
      },
      images: [
        {
          src: "https://picsum.photos/600/800?business,architecture&random=31",
          srcSet: "https://picsum.photos/300/400?business,architecture&random=31 500w, https://picsum.photos/400/500?business,architecture&random=31 800w, https://picsum.photos/540/675?business,architecture&random=31 1080w, https://picsum.photos/800/1000?business,architecture&random=31 1600w, https://picsum.photos/1456/1820?business,architecture&random=31 2912w"
        },
        {
          src: "https://picsum.photos/600/800?business,architecture&random=32",
          srcSet: "https://picsum.photos/300/400?business,architecture&random=32 500w, https://picsum.photos/400/500?business,architecture&random=32 800w, https://picsum.photos/540/675?business,architecture&random=32 1080w, https://picsum.photos/1456/1820?business,architecture&random=32 2912w"
        },
        {
          src: "https://picsum.photos/600/800?business,architecture&random=33",
          srcSet: "https://picsum.photos/300/400?business,architecture&random=33 500w, https://picsum.photos/400/500?business,architecture&random=33 800w, https://picsum.photos/540/675?business,architecture&random=33 1080w, https://picsum.photos/800/1000?business,architecture&random=33 1600w, https://picsum.photos/1355/1693?business,architecture&random=33 2709w"
        },
        {
          src: "https://picsum.photos/600/800?business,architecture&random=34",
          srcSet: "https://picsum.photos/300/400?business,architecture&random=34 500w, https://picsum.photos/400/500?business,architecture&random=34 800w, https://picsum.photos/540/675?business,architecture&random=34 1080w, https://picsum.photos/800/1000?business,architecture&random=34 1600w, https://picsum.photos/1456/1820?business,architecture&random=34 2912w"
        }
      ],
      title1: "RESIDENTIAL",
      title2: "ROOFING",
      colorClass: "color-1",
      description: "Premium residential roofing solutions for homes of all sizes"
    },
    {
      backgroundImage: {
        src: "https://picsum.photos/1920/1080?business,architecture&random=40",
        srcSet: "https://picsum.photos/500/300?business,architecture&random=40 500w, https://picsum.photos/800/450?business,architecture&random=40 800w, https://picsum.photos/1080/600?business,architecture&random=40 1080w, https://picsum.photos/1600/900?business,architecture&random=40 1600w, https://picsum.photos/2000/1125?business,architecture&random=40 2000w, https://picsum.photos/2600/1460?business,architecture&random=40 2600w, https://picsum.photos/3200/1800?business,architecture&random=40 3200w, https://picsum.photos/3944/2220?business,architecture&random=40 3944w"
      },
      images: [
        {
          src: "https://picsum.photos/600/800?business&random=41",
          srcSet: "https://picsum.photos/300/400?business&random=41 500w, https://picsum.photos/400/500?business&random=41 800w, https://picsum.photos/540/675?business&random=41 1080w, https://picsum.photos/800/1000?business&random=41 1600w, https://picsum.photos/1000/1250?business&random=41 2000w, https://picsum.photos/1552/1940?business&random=41 3103w"
        },
        {
          src: "https://picsum.photos/600/800?business&random=42",
          srcSet: "https://picsum.photos/300/400?business&random=42 500w, https://picsum.photos/400/500?business&random=42 800w, https://picsum.photos/540/675?business&random=42 1080w, https://picsum.photos/1059/1323?business&random=42 2117w"
        },
        {
          src: "https://picsum.photos/600/800?business&random=43",
          srcSet: "https://picsum.photos/300/400?business&random=43 500w, https://picsum.photos/400/500?business&random=43 800w, https://picsum.photos/540/675?business&random=43 1080w, https://picsum.photos/800/1000?business&random=43 1600w, https://picsum.photos/1000/1250?business&random=43 2000w, https://picsum.photos/1507/1883?business&random=43 3013w"
        },
        {
          src: "https://picsum.photos/600/800?business&random=44",
          srcSet: "https://picsum.photos/300/400?business&random=44 500w, https://picsum.photos/400/500?business&random=44 800w, https://picsum.photos/540/675?business&random=44 1080w, https://picsum.photos/800/1000?business&random=44 1600w, https://picsum.photos/1120/1400?business&random=44 2240w"
        }
      ],
      title1: "COMMERCIAL",
      title2: "BUILDINGS",
      colorClass: "color-2",
      description: "Large-scale commercial roofing for businesses and institutions"
    },
    {
      backgroundImage: {
        src: "https://picsum.photos/1920/1080?architecture,tools&random=50",
        srcSet: "https://picsum.photos/500/300?architecture,tools&random=50 500w, https://picsum.photos/800/450?architecture,tools&random=50 800w, https://picsum.photos/1080/600?architecture,tools&random=50 1080w, https://picsum.photos/1600/900?architecture,tools&random=50 1600w, https://picsum.photos/2000/1125?architecture,tools&random=50 2000w, https://picsum.photos/2600/1460?architecture,tools&random=50 2600w, https://picsum.photos/4480/2520?architecture,tools&random=50 4480w"
      },
      images: [
        {
          src: "https://picsum.photos/600/800?tools&random=51",
          srcSet: "https://picsum.photos/300/400?tools&random=51 500w, https://picsum.photos/400/500?tools&random=51 800w, https://picsum.photos/540/675?tools&random=51 1080w, https://picsum.photos/800/1000?tools&random=51 1600w, https://picsum.photos/1000/1250?tools&random=51 2000w, https://picsum.photos/1300/1625?tools&random=51 2600w, https://picsum.photos/2240/2800?tools&random=51 4480w"
        },
        {
          src: "https://picsum.photos/600/800?tools&random=52",
          srcSet: "https://picsum.photos/300/400?tools&random=52 500w, https://picsum.photos/400/500?tools&random=52 800w, https://picsum.photos/540/675?tools&random=52 1080w, https://picsum.photos/800/1000?tools&random=52 1600w, https://picsum.photos/1120/1400?tools&random=52 2240w"
        },
        {
          src: "https://picsum.photos/600/800?tools&random=53",
          srcSet: "https://picsum.photos/300/400?tools&random=53 500w, https://picsum.photos/400/500?tools&random=53 800w, https://picsum.photos/540/675?tools&random=53 1080w, https://picsum.photos/800/1000?tools&random=53 1600w, https://picsum.photos/1120/1400?tools&random=53 2240w"
        },
        {
          src: "https://picsum.photos/600/800?tools&random=54",
          srcSet: "https://picsum.photos/300/400?tools&random=54 500w, https://picsum.photos/400/500?tools&random=54 800w, https://picsum.photos/540/675?tools&random=54 1080w, https://picsum.photos/800/1000?tools&random=54 1600w, https://picsum.photos/1120/1400?tools&random=54 2240w"
        }
      ],
      title1: "REPAIR &",
      title2: "MAINTENANCE",
      colorClass: "color-3",
      description: "Expert repairs and preventive maintenance to extend roof life"
    }
  ];

  return (
    <section className="work_section services-section" data-work="section" id="services">
      <div className="work_container">
        {workItems.map((item, index) => (
          <WorkItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;