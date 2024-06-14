import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../hook";
import { handleChangeSelect } from "../../store/formSlice";

export default function BasicSelect() {
    const changeCityName = (event: SelectChangeEvent) => dispatch(handleChangeSelect(event.target.value));
    const dispatch = useAppDispatch();
    const city = useAppSelector((state) => state.formReduser.cityName);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Город</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={city} label="Город" onChange={changeCityName}>
                    <MenuItem value={"г. Новосибирск"}>г. Новосибирск</MenuItem>
                    <MenuItem value={"г. Барнаул"}>г. Барнаул</MenuItem>
                    <MenuItem value={"г. Бердск"}>г. Бердск</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
