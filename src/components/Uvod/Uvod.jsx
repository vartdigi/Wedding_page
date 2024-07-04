import React from 'react';
import UvodniFotka from '../../../assets/UvodniFotka.webp';
import './Uvod.css';
import Sipka from '../../../assets/sipka1.png';

export const Uvod = () => {
  return (
    <section id="Uvod">
      <div className="opening">
        <div className="naseFotka">
          <img className="fotka" src={UvodniFotka} />
        </div>
        <div className="datumText">
          <div className="uvodniDatum">
            <span>17</span>
            <span>08</span>
            <span>24</span>
          </div>
          <div className="uvodniText">
            <p>
              S radostí a úsměvem Vám oznamujeme, že se budeme brát.
              <span>
                Areál hotelu Obora v Kněžičkách u Chlumce nad Cidlinou.
              </span>
            </p>
          </div>
        </div>
        <div className="sipka">
          <img src={Sipka} />
        </div>
      </div>
    </section>
  );
};
