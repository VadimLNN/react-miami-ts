import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppDispatch } from "../../hook";
import { handleChangeDate } from "../../store/formSlice";

export default function DatePickerValue() {
    const dispatch = useAppDispatch();

    const changeDate = (x: any) => {
        let cityName = JSON.stringify(x).substring(1, 11);
        dispatch(handleChangeDate(cityName));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Дата рождения" defaultValue={dayjs("")} onChange={(x) => changeDate(x)} />
            </DemoContainer>
        </LocalizationProvider>
    );
}
