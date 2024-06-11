import { TextField, Button, Stack, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import DatePickerValue from "../components/DatePicker/muiDatePiker";
import BasicSelect from "../components/Select/muiSelect";

type FormValues = {
    email: string;
    password: string;
    fio: string;
};

export const MuiLoginForm = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { register, handleSubmit, formState, control } = form;

    const { errors } = formState;
    //!!!!
    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <div>
            <Typography variant="h4">Регистрация</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2} width={400}>
                    <TextField
                        label="ФИО"
                        type="fio"
                        {...register("fio", { required: "FIO is requied" })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <DatePickerValue />

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Пол</FormLabel>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Ж" />
                            <FormControlLabel value="male" control={<Radio />} label="М" />
                        </RadioGroup>
                    </FormControl>

                    <BasicSelect />

                    <TextField
                        label="Почта"
                        type="email"
                        {...register("email", { required: "Email is requied" })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        label="ПОРОЛЬ"
                        type="password"
                        {...register("password", { required: "Password is requied" })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </Stack>
            </form>
            <DevTool control={control} />
        </div>
    );
};
