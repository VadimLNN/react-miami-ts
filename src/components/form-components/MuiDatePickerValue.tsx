import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";

import { useAppDispatch } from "../../hook";
import { handleChangeDate } from "../../store/formSlice";

import { FormInputProps } from "./FormInputProps";

const DatePickerValue = ({ name, control, label, errors }: FormInputProps) => {
    const dispatch = useAppDispatch();

    const changeDate = (x: any) => {
        let cityName = JSON.stringify(x).substring(1, 11);
        dispatch(handleChangeDate(cityName));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
                <Controller
                    rules={{ required: true }}
                    name={name}
                    control={control}
                    render={({ field }) => <DatePicker onChange={(date) => field.onChange(date)} />}
                ></Controller>
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default DatePickerValue;
