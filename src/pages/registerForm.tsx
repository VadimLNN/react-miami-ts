import { TextField, Button, Stack, FormControlLabel, Typography, Grid, Paper, Checkbox } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePickerValue from "../components/DatePicker/muiDatePiker";
import BasicSelect from "../components/Select/muiSelect";
import RadioGroupGender from "../components/RadioGroup/radioGroup";
import { useAppSelector } from "../hook";

type FormValues = {
    fio: string;
    date_of_birth: string;
    gender: string;
    city: string;
    email: string;
    password: string;
    agree: boolean;
};

export const MuiRegisterForm = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            fio: "",
            date_of_birth: "",
            gender: "",
            city: "",
            email: "",
            password: "",
            agree: false,
        },
    });

    const { register, handleSubmit, formState, control } = form;
    const { errors } = formState;

    const date = useAppSelector((state) => state.formReduser.date);
    const city = useAppSelector((state) => state.formReduser.cityName);
    const gendr = useAppSelector((state) => state.formReduser.gender);

    const onSubmit = (data: FormValues) => {
        data.date_of_birth = date;
        data.city = city;
        data.gender = gendr;

        console.log(data);
    };

    const notify = () => toast("Заскамили мамонта");

    return (
        <Paper
            sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#1A2027" : "#fff"),
            }}
        >
            <Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2} width={500}>
                        <Typography variant="h4">Регистрация</Typography>

                        <TextField
                            label="ФИО"
                            type="fio"
                            {...register("fio", { required: "FIO is requied" })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />

                        <DatePickerValue />

                        <RadioGroupGender />

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

                        <FormControlLabel
                            value={true}
                            control={<Checkbox />}
                            label="Я принимаю условия Лицензионного соглашения, Политики конфиденциальности и даю согласие на обработку данных обо мне."
                            labelPlacement="end"
                            {...register("agree", { required: "Agree is requied" })}
                        />

                        <Button type="submit" variant="contained" color="primary" onClick={notify}>
                            Login
                        </Button>
                        <ToastContainer />
                    </Stack>
                </form>
                <DevTool control={control} />
            </Grid>
        </Paper>
    );
};
