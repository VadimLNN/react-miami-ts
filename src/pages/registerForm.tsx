import { TextField, Button, Stack, FormControlLabel, Typography, Grid, Paper, Checkbox, Card } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePickerValue from "../components/form-components/DatePickerValue";
import BasicSelect from "../components/form-components/muiSelect";
import RadioGroupGender from "../components/form-components/radioGroup";
import { useAppSelector } from "../hook";
import muiDatePiker from "../components/form-components/DatePickerValue";

type FormValues = {
    name: string;
    surname: string;
    dateOfBirth: string;
    gender: string;
    city: string;
    email: string;
    password: string;
    agree: boolean;
};

export const MuiRegisterForm = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            name: "",
            surname: "",
            dateOfBirth: "",
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
        // data.dateOfBirth = date;
        // data.city = city;
        // data.gender = gendr;

        console.log(data);
    };

    const notify = () => toast("Заскамили мамонта");

    return (
        <Card>
            <Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2} width={500}>
                        <Typography variant="h4">Регистрация</Typography>

                        {/* <TextField
                            label="Имя"
                            type="name"
                            {...register("name", { required: "Это поле обязательно" })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />

                        <TextField
                            label="Фамилия"
                            type="surname"
                            {...register("surname", { required: "Это поле обязательно" })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        /> */}

                        <DatePickerValue name={"dateOfBirth"} control={control} label={"Дата рождения"} />

                        {/* <RadioGroupGender name={"gender"} control={control} label={"Пол "} /> */}

                        {/* <BasicSelect /> */}

                        {/* <TextField
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
                        /> */}

                        {/* <FormControlLabel
                            value={true}
                            control={<Checkbox />}
                            label="Я принимаю условия Лицензионного соглашения, Политики конфиденциальности и даю согласие на обработку данных обо мне."
                            labelPlacement="end"
                            {...register("agree", { required: "Agree is requied" })}
                        /> */}

                        <Button type="submit" variant="contained" color="primary" onClick={notify}>
                            Login
                        </Button>
                        <ToastContainer />
                    </Stack>
                </form>
                <DevTool control={control} />
            </Grid>
        </Card>
    );
};
