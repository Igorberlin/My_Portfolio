import { currentRadioSelector } from "../../store/radio";
import { useSelector } from "react-redux";

const PhoneFooter = () => {
  const currentRadio = useSelector(currentRadioSelector);
  return (
    <>
      {currentRadio ? (
        <p className="current-playing-title">current playing</p>
      ) : (
        ""
      )}
      <p className="current-radio">{currentRadio.name}</p>
    </>
  );
};

export default PhoneFooter;
