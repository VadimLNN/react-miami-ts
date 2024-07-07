import { TextField, Button, Stack, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-toastify/dist/ReactToastify.css";
import theme from "../Sign-in_Sign-up/ui/FormTheme";
import { ThemeProvider } from "@emotion/react";
import axios from "axios";

type FormValues = {
    email: string;
    password: string;
};

axios.defaults.baseURL = "";
const Login = () => {
    const validationSchema = yup.object({
        email: yup.string().required("Это поле обязательно"),
        password: yup.string().required("Это поле обязательно"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState, control } = useForm(formOptions);

    const { errors } = formState;

    const onSubmit = async () => {
        const user = await axios.post("http://172.20.10.12:4200/api/auth/login", { email: "test@test.ru", password: "password" });
        console.log(user.data);
    };

    return (
        <ThemeProvider theme={theme}>
            <form style={{ marginTop: "20vw" }}>
                <Stack spacing={2} sx={{ padding: "1em" }}>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        Вход в аккаунт
                    </Typography>
                    <TextField
                        label="Email"
                        type="email"
                        {...register("email", { required: "Email is requied" })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{ marginTop: "5em" }}
                    />

                    <TextField
                        label="Пароль"
                        type="password"
                        {...register("password", { required: "Password is requied" })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </Stack>
                <Box textAlign="center">
                    <Button
                        onClick={onSubmit}
                        fullWidth
                        variant="contained"
                        sx={{
                            width: "310px",
                            marginTop: "1em",
                            background: "#EE2F53",
                            borderRadius: 3,
                            marginLeft: "14px",
                        }}
                    >
                        Войти
                    </Button>
                </Box>

                <Typography
                    sx={{
                        fontSize: "10pt",
                        marginTop: "2em",
                        lineHeight: 1.5,
                        fontFamily: "Roboto Bold 900",
                        textAlign: "center",
                        color: "#0066B3",
                    }}
                >
                    Не знаю пароль
                </Typography>

                <Typography
                    sx={{
                        fontSize: "10pt",
                        marginTop: "10em",
                        lineHeight: 1.5,
                        fontFamily: "Roboto Bold 900",
                        textAlign: "center",
                        color: "#0066B3",
                    }}
                >
                    У меня нет аккаунта
                </Typography>
            </form>
        </ThemeProvider>
    );
};

export default Login;
