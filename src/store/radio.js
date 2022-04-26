import { createSlice } from "@reduxjs/toolkit";
import { getRadios } from "../services/radioApi";
import { startLoading, stopLoading } from "./app";

const initialState = {
    radios: null,
    currentRadio: "",
};
const radioReducer = createSlice({
    name: "radio",
    initialState,
    reducers: {
        setRadios: (state, { payload }) => {
            state.radios = payload;
        },
        changeRadios: (state, { payload }) => {
            state.currentRadio = payload;
        },
    },
});
export default radioReducer.reducer;
export const { setRadios, changeRadios, getRadioId } = radioReducer.actions;
export const radiosSelector = (state) => state.radio.radios;
export const currentRadioSelector = (state) => state.radio.currentRadio;

export const getRadiosAction = () => async (dispatch) => {
    try {
        dispatch(startLoading());
        const data = await getRadios();
        dispatch(setRadios(data));
    } catch (error) {
        console.log("error", error.message);
    } finally {
        dispatch(stopLoading());
    }
};
export const changeRadioAction = (radio) => async (dispatch) => {
    try {
        dispatch(changeRadios(radio));
    } catch (error) {
        console.log("error", error.message);
    }
};
