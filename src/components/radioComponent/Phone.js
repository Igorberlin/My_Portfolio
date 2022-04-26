import "../../sass/phone/phone.scss";
import RadioList from "../../components/radioComponent/RadioList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    changeRadioAction,
    getRadiosAction,
    radiosSelector,
} from "../../store/radio";
import Loader from "../loaderComponent/Loader";
import PhoneFooter from "./PhoneFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Phone = () => {
    const radios = useSelector(radiosSelector);

    const displayOff = () => {
        document.querySelector(".radio").classList.toggle("hide");
        dispatch(changeRadioAction(""));
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRadiosAction());
    }, [dispatch]);
    return !radios ? (
        <Loader />
    ) : (
        <div className="phone">
            <div className="phone-header">
                <div className="arrow-left">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className="title">stations</div>
                <div className="power-off-btn">
                    <button onClick={displayOff}>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>
            </div>
            <div className="phone-body">
                <RadioList />
            </div>
            <div className="phone-footer">
                <PhoneFooter />
            </div>
        </div>
    );
};

export default Phone;
