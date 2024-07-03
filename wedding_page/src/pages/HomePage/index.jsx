import './style.css';
import { Uvod } from '../../components/Uvod/Uvod';
import { MistoKonani } from '../../components/MistoKonani/MistoKonani';
import { Ubytovani } from '../../components/Ubytovani/Ubytovani';
import { Program } from '../../components/Program/Program';
import { Kontakt } from '../../components/Kontakt/Kontakt.jsx';

export const HomePage = () => {
  return (
    <div className="container">
      <Uvod />
      <MistoKonani />
      <Ubytovani />
      <Program />
      <Kontakt />
    </div>
  );
};
