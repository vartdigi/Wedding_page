import Ubytko from '../../../../assets/Ubytko.png';
import './Ubytovani.css';

export const Ubytovani = () => {
  return (
    <div className="detailUbytovani">
      <img src={Ubytko} />
      <p className="textUbytovani">
        Hotel se nachází v bezprostřední blízkosti někdejšího hraběcího
        loveckého zámečku Neugebau, který je architektonickou památkou. Hotel
        disponuje 50 lůžky, jeho součástí je restaurace s krbem a barem,
        samozřejmostí je Wi-Fi v celém objektu.
      </p>
      <button className="btnHotel">HOTEL</button>
    </div>
  );
};
