import { useDispatch, useSelector } from "react-redux";
import { radiosSelector, changeRadioAction } from "../../store/radio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const RadioList = () => {
    const [id, setId] = useState("");

    const dispatch = useDispatch();
    const radios = useSelector(radiosSelector);

    const showClickHandler = (e) => {
        document.getElementById(`${e}`).classList.add("display-show");
    };
    const hideClickHandler = (e) => {
        document.getElementById(`${e}`).classList.remove("display-show");
    };

    return (
        <div className="radio">
            {radios.radios.map((radio, index) => (
                <div key={index} className="radio-list">
                    <div className="radio-details" id={index}>
                        <div className="radio-details-minus">
                            <FontAwesomeIcon icon={faMinusCircle} />
                        </div>
                        <figure className="figure">
                            <img src={radio.image} alt="" />
                        </figure>
                        <div className="radio-details-plus">
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </div>
                    </div>
                    <div className="radio-station-block">
                        <div
                            className="radio-name"
                            id={index}
                            onClick={(e) => {
                                const number = e.target.getAttribute("id");
                                setId(number);
                                console.log("after click id=", id);
                                showClickHandler(number);
                                dispatch(changeRadioAction(radio));
                                {
                                    id === "" ? "" : hideClickHandler(id);
                                }
                            }}
                        >
                            {radio.name}
                        </div>
                        <div className="radioFrequency">{radio.frequency}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RadioList;
