import './MistoKonani.css';
import DressCode from '../../../assets/dressCode.png';
import Barvy from '../../../assets/barvy.png';
import Rim from '../../../assets/misto.png';
import Misto from '../../../assets/MistoKonani.png';
import React from 'react';

export const MistoKonani = () => {
  const handleClick = () => {
    window.open(
      'https://www.google.com/maps/place/Kněžičky+33,+289+08+Kněžičky/@50.1486233,15.3313688,15.52z/data=!4m6!3m5!1s0x470c3d44fd12d6cd:0xd5c8afea4f215db5!8m2!3d50.14738!4d15.3391537!16s%2Fg%2F11crr0fwyf?entry=ttu',
      '_blank',
    );
  };
  return (
    <>
      <section id="Misto">
        <div className="animatedText">
          <span>LUKÁŠ</span>
          <span className="Allura">&</span>
          <span>VARTUI</span>
        </div>
        <div className="DressCode">
          <img src={DressCode} />
          <p>doporučené barvy</p>
          <img className="barvy" src={Barvy} />
        </div>
        <div className="obrazek">
          <img className="rim" src={Rim} />
        </div>
        <div className="mistoKonani">
          <img src={Misto} />
          <p className="mistoText">
            Zde najdete místo konání obřadu a následné oslavy. Parkování je
            zajištěné v areálů, a je zdarma.
          </p>
          <button onClick={handleClick} className="btn">
            MAPA
          </button>
        </div>
      </section>
    </>
  );
};
