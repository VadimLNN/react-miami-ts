import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { FormHelperText } from "@mui/material";

const CityMuiBasicSelect = ({ name, control, label, errors }: FormInputProps) => {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth error={errors.city ? true : false}>
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
                />
                <FormHelperText>{errors.city && <p style={{ color: "error" }}>{errors.city.message}</p>}</FormHelperText>
            </FormControl>
        </Box>
    );
};

export default CityMuiBasicSelect;
