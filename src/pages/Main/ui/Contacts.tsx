import { TextField, Stack, alpha } from "@mui/material";
import { Box, ThemeProvider, Typography, Button } from "@mui/material";
import * as yup from "yup";
import { createTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    padding: "0.7em",
                    color: "white",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: "15px",
                    background: alpha("#FFFFFF", 0.15),
                    input: { color: "white" },
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                        // color: "FFFFFF",
                        borderRadius: "15px",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FFFFFF",
                        },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                        color: alpha("#FFFFFF", 0.5),
                    },
                },
            },
        },
    },
});

const Contacts = () => {
    type FormValues = {
        name: string;
        email: string;
        t_number: string;
    };
    const validationSchema = yup.object({
        name: yup.string().required("Это поле обязательно"),
        email: yup.string().required("Это поле обязательно"),
        t_number: yup.string().required("Это поле обязательно"),
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
        <>
            <Box sx={{ padding: "5vw", marginTop: "20vw", borderRadius: 4, background: "radial-gradient(#3E7CFE, #2850A3)" }}>
                <Typography sx={{ fontSize: "24px", marginTop: "4vw", lineHeight: "1.3", color: "white" }}>
                    Оставьте контакты, и мы поможем подобрать IT-смену для вашего ребенка
                </Typography>

                <ThemeProvider theme={theme}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2} sx={{ marginTop: "7vw" }}>
                            <TextField
                                color="primary"
                                label="Имя"
                                type="name"
                                {...register("name", { required: "Это поле обязательно" })}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                            <TextField
                                label="Почта"
                                type="email"
                                {...register("email", { required: "Это поле обязательно" })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                            <TextField
                                label="Телефон"
                                type="t_number"
                                defaultValue="7"
                                // placeholder="913 ??? ?? ??"
                                {...register("t_number", { required: "Это поле обязательно" })}
                                error={!!errors.t_number}
                                helperText={errors.t_number?.message}
                            />
                        </Stack>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                marginTop: "8vw",
                                background: "linear-gradient(to right, #EE2F53, #992037)",
                                borderRadius: 3,
                            }}
                        >
                            Отправить
                        </Button>
                    </form>
                    <DevTool control={control} />
                </ThemeProvider>
                <Typography sx={{ padding: "2vw", fontSize: "13px", marginTop: "5vw", lineHeight: "1.3", color: "white" }}>
                    Нажимая кнопку, я соглашаюсь с{" "}
                    <a href="" style={{ color: "white" }}>
                        Положением о персональных данных
                    </a>{" "}
                    и даю согласие на их обработку и хранение
                </Typography>
            </Box>
        </>
    );
};

export default Contacts;
