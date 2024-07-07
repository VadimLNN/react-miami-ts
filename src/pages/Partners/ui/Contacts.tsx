import { Stack, TextField, Typography, Button, alpha, ThemeProvider  } from "@mui/material";
import { Box } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { toast } from "react-toastify";
import { createTheme } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

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
                            borderColor: "#red",
                        },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                        color: alpha("#blue", 0.5),
                        
                    },
                },
            },
        },
    },
});


const Form = () => {
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
        <Box sx={{background: "#FFFFFF", borderRadius: 5, padding: "5vw", width: "75%", margin: "auto"}}>
            <Typography variant="h3" sx={{ fontSize: "1.5em", textAlign: "left", marginTop: "vw", fontFamily: "Russo One", marginLeft: "14px", lineHeight: "1.3" }}>
            Нужен такой формат - <br/> просто скажите: <br/> обсудим, разработаем, проведём
            </Typography>
            <Typography sx={{ fontSize: "10.5pt", marginTop: "1em", lineHeight: 1.5, fontFamily: "Roboto",  marginLeft: "14px" }}>
            Ответим на все вопросы, подберём <br/> оптимальное решение и дадим <br/> рекомендации по обучению.
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
                                label="Номер телефона"
                                type="t_number"
                                // defaultValue="Номер телефона"
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
                                background: "#0B1F33",
                                borderRadius: 3,
                            }}
                        >
                            Создать смену
                        </Button>
            </form>
           </ ThemeProvider>
            <DevTool control={control} />



        </Box>
    );
}
 
export default Form;