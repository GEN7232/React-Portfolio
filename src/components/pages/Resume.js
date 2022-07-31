import React from 'react';
import resume from '../../assets/imgs/resume.png';

const styles = {
  resumeStyle: {
    display: 'block',
    margin: '0 auto'
  }
};

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={resume} download>
        <img alt="Genevieve Nelson Resume 2022" src={resume} width="80%" style={styles.resumeStyle} />
      </a>
    </div>
  );
}
