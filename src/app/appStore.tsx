import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../pages/Sign-in_Sign-up/formSlice";

const store = configureStore({
    reducer: {
        formReduser: formSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
