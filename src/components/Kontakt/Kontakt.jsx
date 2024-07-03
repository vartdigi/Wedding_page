import DetailKontakt from '../../../assets/Kontakt.png';
import Matej from '../../../assets/Matej.png';
import Line from '../../../assets/Line.png';
import './Kontakt.css';

export const Kontakt = () => {
  return (
    <section id="Kontakt">
      <div className="detailKontakt">
        <img src={DetailKontakt} />
      </div>
      <div className="KontaktMatej">
        <p className="PopisekKontakt">
          V případě jakéhokoliv dotazu se obracejte na svědka ženicha.
        </p>
        <img className="Matej" src={Matej} />
        <span className="Name">Matěj Holeček</span>
        <span className="Telefon">+420 606 441 104</span>
      </div>
      <div className="Line">
        <img src={Line} />
      </div>
    </section>
  );
};
