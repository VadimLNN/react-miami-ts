import { Checkbox, Box, FormControl, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { FormHelperText } from "@mui/material";

const AgreeMuiCheckbox = ({ name, control, label, errors }: FormInputProps) => {
    return (
        <Box>
            <FormControl error={errors.agree ? true : false}>
                <FormControlLabel
                    onError={errors.city}
                    labelPlacement="end"
                    label={"Я принимаю условия Лицензионного соглашения, Политики конфиденциальности и даю согласие на обработку данных обо мне."}
                    control={
                        <Controller
                            name={name}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Checkbox defaultValue={""} onChange={(value) => field.onChange(value)} />}
                        />
                    }
                ></FormControlLabel>
                <FormHelperText>{errors.agree && <p style={{ color: "error" }}>{errors.agree.message}</p>}</FormHelperText>
            </FormControl>
        </Box>
    );
};

export default AgreeMuiCheckbox;
