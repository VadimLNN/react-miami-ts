import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../hook";
import { handleChangeSelect } from "../../store/formSlice";
import { FormInputProps } from "./FormInputProps";
import { Controller } from "react-hook-form";

const CityMuiBasicSelect = ({ name, control, label, errors }: FormInputProps) => {
    const changeCityName = (event: SelectChangeEvent) => dispatch(handleChangeSelect(event.target.value));
    const dispatch = useAppDispatch();
    const city = useAppSelector((state) => state.formReduser.cityName);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label={label}
                            defaultValue={""}
                            onChange={(selectedCity) => field.onChange(selectedCity)}
                        >
                            <MenuItem value={"г. Новосибирск"}>Новосибирск</MenuItem>
                            <MenuItem value={"г. Барнаул"}>Барнаул</MenuItem>
                            <MenuItem value={"г. Бердск"}>Бердск</MenuItem>
                        </Select>
                    )}
                ></Controller>
            </FormControl>
        </Box>
    );
};

export default CityMuiBasicSelect;
