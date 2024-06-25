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
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    padding: "0.7em",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                        color: "FFFFFF",
                        bgcolor: alpha("#FFFFFF", 0.1),
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
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: 340,
                    height: 550,
                    marginTop: 3,
                    borderRadius: 4,

                    background: "radial-gradient(#3E7CFE, #2850A3)",
                }}
            >
                <Typography sx={{ fontSize: "24px", marginTop: "1em", lineHeight: "1.5", color: "white", marginLeft: "14px" }}>
                    Оставьте контакты, и мы поможем подобрать IT-смену для вашего ребенка
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2} sx={{ padding: "1em" }}>
                        <TextField
                            label="Имя"
                            type="name"
                            {...register("name", { required: "Это поле обязательно" })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            label="Почта"
                            type="email"
                            {...register("email", { required: "Email is requied" })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            label="Телефон"
                            type="t_number"
                            defaultValue="7"
                            placeholder="913 ??? ?? ??"
                            {...register("t_number", { required: "t_number is requied" })}
                            error={!!errors.t_number}
                            helperText={errors.t_number?.message}
                        />
                    </Stack>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            width: "310px",
                            marginTop: "1em",
                            background: "linear-gradient(to right, #EE2F53, #992037)",
                            borderRadius: 3,
                            marginLeft: "14px",
                        }}
                    >
                        Отправить
                    </Button>
                </form>
                <DevTool control={control} />

                <Typography sx={{ fontSize: "14px", marginTop: "1em", lineHeight: "1.5", color: "white", marginLeft: "14px" }}>
                    Нажимая кнопку, я соглашаюсь с{" "}
                    <a href="" style={{ color: "white" }}>
                        Положением о персональных данных
                    </a>{" "}
                    и даю согласие на их обработку и хранение
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default Contacts;
