import React from 'react';
import Background from '../../assets/imgs/home-background.jpg';
import benny from "../../assets/imgs/me-and-benny.jpg"

const styles = {
  me: {
    width: "50%",
    display: 'block',
    margin: '0 auto',
    marginTop: '50px'
  },
  pTag: {
    width: '80%',
    margin: "0 auto",
    textAlign: 'center',
    fontSize: "26px",
    marginTop: '50px',

  }
};

export default function Home() {
  return (
    <div>
      <h1>Genevieve Nelson </h1>
      <img style={{width: '100%', height: '50%'}} src={Background} alt="coding"></img>
      <div>
        <img style={styles.me} src={benny} alt="me and my cat, Benny Goodman"></img>
        <p style={styles.pTag}>
          Hello, I'm Genevieve Nelson, and I am a fullstack web developer proficient in HTML, CSS, Javascript, and MERN programming. I initially went to school for Audio Engineering at the Unviersity of New Haven, and spent several years working out of recording studios in New York and New Jersey. I like to use the skills I learned in the studio and apply them to programming. In particular I love being both creative and technical at the same time. I find it to be incredibly engaging. I am also very good at troubleshooting after years of working with vintage audio gear and recording software.
        </p>
      </div>
    </div>
  );
}
