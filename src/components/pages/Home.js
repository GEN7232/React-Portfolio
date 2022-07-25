import React from 'react';
import Background from '../../assets/imgs/home-background.jpg';

export default function Home() {
  return (
    <div>
      <h1>Genevieve Nelson </h1>
      <img style={{width: '100%', height: '50%'}} src={Background} alt="coding"></img>
    </div>
  );
}
