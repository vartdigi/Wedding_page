import './MistoKonani.css';
import DressCode from '../../../../assets/dressCode.png';
import Barvy from '../../../../assets/barvy.png';
import Rim from '../../../../assets/misto.png';
import Misto from '../../../../assets/MistoKonani.png';

export const MistoKonani = () => {
  return (
    <>
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
        <button className="btn">MAPA</button>
      </div>
    </>
  );
};
