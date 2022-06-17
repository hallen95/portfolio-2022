import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, useCycle } from 'framer-motion';

import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const [toggle, setToggle] = useCycle(false, true);

  const variants = {
    open: {
      clipPath: `circle(1000px at 100% 0)`,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      clipPath: `circle(0px at 100% 0)`,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        <motion.div
          initial={false}
          animate={toggle ? 'open' : 'closed'}
          variants={variants}
        >
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a onClick={() => setToggle(false)} href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
