import { Formik, Form } from "formik";
import * as Yup from 'yup'

import "../styles/styles.css"
import { MyCheckBox, MyTextInput, MySelect } from "../components";



export const FormikAbstraction = () => {


    return (
        <div>
            <h1>Formik Abstrataction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string().email("El correo no tiene un formato valido").required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                        .required('Requerido')

                })

                }
            >


                {
                    (formik) => (
                        <Form noValidate>
                            <MyTextInput label='First Name' name='firstName' placeholder="Joni" />
                            <MyTextInput label='Last Name' name='lastName' placeholder="Fernandez" />
                            <MyTextInput label='Email Adress' name='email' placeholder="Joni@mail.com" type="email" />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>

                            <MyCheckBox label="Terms & Conditions" name="terms" />

                            <button type="submit">Submit</button>

                        </Form>
                    )
                }

            </Formik>



        </div>
    )
}
