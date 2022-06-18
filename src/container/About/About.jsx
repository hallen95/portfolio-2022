import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  // const abouts = [
  //   {
  //     title: 'Web Development',
  //     description: 'I am a good developer.',
  //     imgUrl: images.about01,
  //   },
  //   {
  //     title: 'Web Design',
  //     description: 'I am a good developer.',
  //     imgUrl: images.about02,
  //   },
  //   {
  //     title: 'Frontend development',
  //     description: 'I am a good developer.',
  //     imgUrl: images.about03,
  //   },
  //   {
  //     title: 'Backend development',
  //     description: 'I am a good developer.',
  //     imgUrl: images.about04,
  //   },
  // ];
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        I know That <span>Good Development</span>
        <br />
        means <span>good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: '20px' }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: '10px' }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
