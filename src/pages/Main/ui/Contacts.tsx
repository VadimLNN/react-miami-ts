import { Box, ThemeProvider, Typography, Button, CardMedia } from "@mui/material";
import img_list from "../../../shared/ui/imgs/list.png";

import theme from "./ui/FormTheme";
import { TextField,  Stack,  Card } from "@mui/material";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import "react-toastify/dist/ReactToastify.css";


const Contacts = () => {

    

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
        
            <Box
                sx={{
                    width: 340,
                    height: 550,
                    marginTop: 3,
                    borderRadius: 4,

                    background: "radial-gradient(#3E7CFE, #2850A3)",
                }}
            >
                <Typography sx={{ fontSize: "24px", marginTop: "1em", lineHeight: "1.5", color: "white", marginLeft: "14px"}}>Оставьте контакты, и мы поможем подобрать 
                IT-смену для вашего ребенка</Typography>
                
               
               
                <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                        
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
                    </Stack>
                </form>
                <DevTool control={control} />
            </Card>



                <Button
                    fullWidth
                    variant="contained"
                    sx={{ width: "310px", marginTop: "1em", background: "linear-gradient(to right, #EE2F53, #992037)", borderRadius: 3 , marginLeft: "14px"}}
                >
                Отправить
                </Button>
                <Typography sx={{ fontSize: "14px", marginTop: "1em", lineHeight: "1.5", color: "white", marginLeft: "14px" }}>
                Нажимая кнопку, я соглашаюсь с Положением о персональных данных и даю согласие на их обработку и хранение
                </Typography>
                
            </Box>
        // </ThemeProvider>
    );
};

export default Contacts;
