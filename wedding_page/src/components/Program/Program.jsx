import ProgramPic from '../../../../assets/program.png';
import './Program.css';
import Time from '../../../../assets/obrazekprogram.png';
import ProgramTime from '../../../../assets/time.png';

export const Program = () => {
  return (
    <>
      <section id="Program">
        <div className="program">
          <img src={ProgramPic} />
        </div>

        <div className="Time">
          <img className="programTime" src={Time} />
        </div>
        <p className="PopisTime">TIME</p>
        <div className="ProgramTime">
          <img src={ProgramTime} />
        </div>
      </section>
    </>
  );
};
