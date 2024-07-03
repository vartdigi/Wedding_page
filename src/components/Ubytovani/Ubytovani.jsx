import Ubytko from '../../../../assets/Ubytko.png';
import './Ubytovani.css';

export const Ubytovani = () => {
  const handleClick = () => {
    window.open(
      'https://www.kinskydalborgo.cz/obora-knezicky/?_gl=1*yi9q7y*_up*MQ..*_ga*MTcyNTMzNjM1Ny4xNzE5Nzc2Njgz*_ga_E6HZ111RHN*MTcxOTc3NjY4Mi4xLjEuMTcxOTc3Njg0MC4wLjAuMA..',
      '_blank',
    );
  };
  return (
    <section id="Ubytovani">
      <div className="detailUbytovani">
        <img src={Ubytko} />
        <p className="textUbytovani">
          Hotel se nachází v bezprostřední blízkosti někdejšího hraběcího
          loveckého zámečku Neugebau, který je architektonickou památkou. Hotel
          disponuje 50 lůžky, jeho součástí je restaurace s krbem a barem,
          samozřejmostí je Wi-Fi v celém objektu.
        </p>
        <button onClick={handleClick} className="btnHotel">
          HOTEL
        </button>
      </div>
    </section>
  );
};
