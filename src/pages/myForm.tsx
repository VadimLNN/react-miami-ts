import { Controller, SubmitHandler, useForm } from "react-hook-form";
interface MyForm {
    name: string;
    age: number;
}
const RegisterFormPage = () => {
    const { register, handleSubmit, reset, watch, control } = useForm<MyForm>({
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
                <Controller name="age" control={control} render={({ field }) => <input {...field} />} />

                <button>Send</button>
                <button
                    type="button"
                    onClick={() =>
                        reset({
                            age: 0,
                            name: "",
                        })
                    }
                >
                    Reset fields
                </button>
            </form>
            {watch("age")}
        </>
    );
};

export default RegisterFormPage;
