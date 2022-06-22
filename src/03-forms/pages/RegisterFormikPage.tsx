
import * as Yup from 'yup';
import "../styles/styles.css"
import { Form, Formik } from "formik";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => { console.log(values) }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                            .max(15, 'No se pueden usar mas de 15 caracteres')
                            .required(),
                        email: Yup.string()
                            .email("Revise el formato del correo")
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'Minimo 6 caracteres')
                            .required('Requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                            .required('Requerido')
                    })
                }
            >

                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput label="Nombre" name="name" placeholder="Joni" />
                            <MyTextInput label="Email" name="email" placeholder="joni@mail.com" />
                            <MyTextInput label="Password" name="password1" type="password" placeholder="******" />
                            <MyTextInput label="Confirm pass" name="password2" type="password" placeholder="******" />
                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset}>Reset Form</button>
                        </Form>
                    )
                }

            </Formik>



        </div>
    )
}
