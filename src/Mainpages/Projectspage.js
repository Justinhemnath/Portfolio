import React from 'react';
import '../Styles/Projectspage.scss';
import { jsprojects, reactprojects, cloneprojects } from './ProjectsArray';
import Procard from '../Components/Procard';
import Clonecard from '../Components/Clonecard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { themeState } from '../Features/themeSlice';

const Projectspage = () => {
  const theme = useSelector(themeState);
  /* Map functions to make list */

  let reactjsarray = reactprojects.map((obj) => (
    <Procard key={obj.name} gitlink={obj.git} shadow={theme.boxShadow}>
      <Link
        to={obj.location}
        className="card-name"
        style={{ backgroundColor: theme.sectionColor, color: theme.fontColor }}>
        {obj.name}
      </Link>
    </Procard>
  ));

  let jsprojectsarray = jsprojects.map((obj) => (
    <Procard key={obj.name} gitlink={obj.git} shadow={theme.boxShadow}>
      <a
        href={obj.location}
        target="_blank"
        rel="noreferrer"
        className="card-name"
        style={{ backgroundColor: theme.sectionColor, color: theme.fontColor }}>
        {obj.name}
      </a>
    </Procard>
  ));

  let clonesarray = cloneprojects.map((obj) => (
    <Clonecard
      key={obj.name}
      name={obj.name}
      clone={obj.clonelink}
      main={obj.mainlink}
      git={obj.gitlink}
      shadow={theme.boxShadow}
      bgColor={theme.sectionColor}
      color={theme.fontColor}
    />
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      exit={{ opacity: 0 }}
      className="projects-page">
      {/* REACT PROJECTS */}

      <div className="heading" style={{ color: theme.fontColor }}>
        <p>REACT PROJECTS:</p>

        <div className="heading-alert">
          <p>
            <i className="fa-solid fa-cog fa-spin"></i>More projects underway
          </p>
        </div>
      </div>

      <div className="projects">{reactjsarray}</div>

      {/* RESPONSIVE HTML/JAVASCRIPT PROJECTS */}

      <div className="heading" style={{ color: theme.fontColor }}>
        <p>RESPONSIVE HTML/JAVASCRIPT PROJECTS:</p>

        <div className="heading-alert">
          <p>
            <i className="fa-solid fa-cog fa-spin"></i>More projects underway
          </p>
        </div>
      </div>

      <div className="projects">{jsprojectsarray}</div>

      {/* CLONES */}

      <div className="heading" style={{ color: theme.fontColor }}>
        <p>CLONES:</p>
      </div>

      <div className="projects">{clonesarray}</div>
    </motion.div>
  );
};

export default Projectspage;
