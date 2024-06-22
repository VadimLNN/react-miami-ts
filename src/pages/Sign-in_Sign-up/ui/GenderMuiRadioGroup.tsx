import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const GenderMuiRadioGroup = ({ name, control, label, errors }: FormInputProps) => {
    return (
        <FormControl error={errors.gender ? true : false}>
            <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <RadioGroup row name="gender" onChange={(gend) => field.onChange(gend)}>
                        <FormControlLabel value="female" label="Ж" control={<Radio />} />
                        <FormControlLabel value="male" label="М" control={<Radio />} />
                    </RadioGroup>
                )}
            />
            <FormHelperText>{errors.dateOfBirth && <p style={{ color: "error" }}>{errors.dateOfBirth.message}</p>}</FormHelperText>
        </FormControl>
    );
};

export default GenderMuiRadioGroup;
