import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

interface MyForm {
    name: string;
    age: number;
}

function App() {
    const { register, handleSubmit } = useForm<MyForm>({
        defaultValues: {
            age: 18,
        },
    });

    const submit: SubmitHandler<MyForm> = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register("name", { required: true })}></input>
                <input type="number" {...register("age", { required: true })}></input>
                <button>Send</button>
            </form>
        </>
    );
}

export default App;
