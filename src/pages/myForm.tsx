import { Button, Paper, ThemeProvider, Typography } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputText } from "../components/form-components/FormInputText";
import { FormInputMultiCheckbox } from "../components/form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "../components/form-components/FormInputDropdown";
import { FormInputDate } from "../components/form-components/FormInputDate";
import { FormInputRadio } from "../components/form-components/FormInputRadio";

import DemoTheme from "../components/DemoTheme/demoTheme";

interface IFormInput {
    textValue: string;
    radioValue: string;
    // checkboxValue: string[];
    // dateValue: Date;
    // dropdownValue: string;
}

const defaultValues = {
    textValue: "",
    radioValue: "",
    // checkboxValue: [],
    // dateValue: new Date(),
    // dropdownValue: "",
};

const validationSchema = yup.object({
    textValue: yup.string().required("Full Name is required"),
    radioValue: yup.string().required("Full Name is required"),
});

export const FormDemo = () => {
    const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
        defaultValues: defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <ThemeProvider theme={DemoTheme()}>
            <Paper>
                <Typography variant="h4"> Form Demo</Typography>

                <FormInputText name="textValue" control={control} label="Text Input" />
                <FormInputRadio name={"radioValue"} control={control} label={"Radio Input"} />
                <FormInputDropdown name="dropdownValue" control={control} label="Dropdown Input" />
                <FormInputDate name="dateValue" control={control} label="Date Input" />
                <FormInputMultiCheckbox control={control} setValue={setValue} name={"checkboxValue"} label={"Checkbox Input"} />

                <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                    Submit
                </Button>
                <Button onClick={() => reset()} variant={"outlined"}>
                    Reset
                </Button>
            </Paper>
        </ThemeProvider>
    );
};
