import ProgramPic from '../../../../assets/program.png';
import './Program.css';
import Time from '../../../../assets/obrazekprogram.png';

export const Program = () => {
  return (
    <>
      <div className="program">
        <img src={ProgramPic} />
      </div>

      <div className="Time">
        <img className="programTime" src={Time} />
      </div>
    </>
  );
};
