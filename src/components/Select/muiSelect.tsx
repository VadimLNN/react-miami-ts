import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
    const [city, setCity] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Город</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={city} label="Город" onChange={handleChange}>
                    <MenuItem value={"г. Новосибирск"}>Новосибирск</MenuItem>
                    <MenuItem value={"г. Барнаул"}>Барнаул</MenuItem>
                    <MenuItem value={"г. Бердск"}>Бердск</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
