import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { useAppDispatch } from "../../hook";
import { handleChangeGender } from "../../store/formSlice";
import { FormInputProps } from "./FormInputProps";

const RadioGroupGender = ({ name, control, label }: FormInputProps) => {
    const dispatch = useAppDispatch();

    const changeGender = (_value: any, gender: string) => {
        dispatch(handleChangeGender(gender));
    };

    return (
        <div>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <RadioGroup name="gender" onChange={(gend) => field.onChange(gend)}>
                            <FormControlLabel value="female" label="Ж" control={<Radio />} />
                            <FormControlLabel value="male" label="М" control={<Radio />} />
                        </RadioGroup>
                    )}
                />
            </FormControl>
        </div>
    );
};

export default RadioGroupGender;
