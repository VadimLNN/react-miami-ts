import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material";
import { useAppDispatch } from "../../hook";
import { handleChangeGender } from "../../store/formSlice";

const RadioGroupGender = () => {
    const dispatch = useAppDispatch();

    const changeGender = (_value: any, gender: string) => {
        // console.log(register);
        dispatch(handleChangeGender(gender));
    };

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Пол</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={changeGender}>
                <FormControlLabel value="female" control={<Radio />} label="Ж" />
                <FormControlLabel value="male" control={<Radio />} label="М" />
            </RadioGroup>
        </FormControl>
    );
};

export default RadioGroupGender;
