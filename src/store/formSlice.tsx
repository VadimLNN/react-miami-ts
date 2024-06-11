import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type formState = {
    cityName: string;
    date: string;
    gender: string;
};

const initialState: formState = {
    cityName: "",
    date: "",
    gender: "",
};

const formSlice = createSlice({
    name: "reg_form",
    initialState,
    reducers: {
        handleChangeSelect(state, action: PayloadAction<string>) {
            state.cityName = action.payload;
        },
        handleChangeDate(state, action: PayloadAction<string>) {
            state.date = action.payload;
        },
        handleChangeGender(state, action: PayloadAction<string>) {
            state.gender = action.payload;
        },
    },
});

export const { handleChangeSelect, handleChangeDate, handleChangeGender } = formSlice.actions;
export default formSlice.reducer;
