import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl, FormHelperText } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const DatePickerValue = ({ name, control, label, errors }: FormInputProps) => {
    return (
        <FormControl error={errors.dateOfBirth ? true : false}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <DatePicker sx={{}} disableFuture label={label} onChange={(date) => field.onChange(date)} />}
                ></Controller>
                <FormHelperText>{errors.dateOfBirth && <p style={{ color: "error" }}>{errors.dateOfBirth.message}</p>}</FormHelperText>
            </LocalizationProvider>
        </FormControl>
    );
};

export default DatePickerValue;
