import { TextField, Button, Stack, Typography, Card } from "@mui/material";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import "react-toastify/dist/ReactToastify.css";
import DatePickerValue from "./ui/MuiDatePickerValue";
import CityMuiBasicSelect from "./ui/CityMuiBasicSelect";
import GenderMuiRadioGroup from "./ui/GenderMuiRadioGroup";
import AgreeMuiCheckbox from "./ui/AgreeMuiCheckbox";
import { ThemeProvider } from "@emotion/react";
import theme from "./ui/FormTheme";

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

export const RegisterForm = () => {
    const validationSchema = yup.object({
        name: yup.string().required("Это поле обязательно"),
        surname: yup.string().required("Это поле обязательно"),
        dateOfBirth: yup.string().required("Это поле обязательно"),
        gender: yup.string().required("Это поле обязательно"),
        city: yup.string().required("Это поле обязательно"),
        email: yup.string().required("Это поле обязательно"),
        password: yup.string().required("Это поле обязательно"),
        agree: yup.bool().required("Это поле обязательно"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState, control } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        console.log(data);
        notify();
    };

    const notify = () => toast("Заскамили мамонта");

    return (
        <ThemeProvider theme={theme}>
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                        <Typography variant="h4">Регистрация</Typography>

                        <TextField
                            label="Имя"
                            type="name"
                            {...register("name", { required: "Это поле обязательно" })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            label="Фамилия"
                            type="surname"
                            {...register("surname", { required: "Это поле обязательно" })}
                            error={!!errors.surname}
                            helperText={errors.surname?.message}
                        />

                        <DatePickerValue name={"dateOfBirth"} control={control} label={"Дата рождения"} errors={errors} />

                        <GenderMuiRadioGroup name={"gender"} control={control} label={"Пол"} errors={errors} />

                        <CityMuiBasicSelect name={"city"} control={control} label={"Выберите ваш город"} errors={errors} />

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

                        <AgreeMuiCheckbox name={"agree"} control={control} label={"Согласие на обработку персональных данных"} errors={errors} />

                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>

                        <ToastContainer />
                    </Stack>
                </form>
                <DevTool control={control} />
            </Card>
        </ThemeProvider>
    );
};
