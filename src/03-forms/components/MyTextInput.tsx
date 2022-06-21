import { ErrorMessage, useField } from 'formik'


interface Props {
    label: string,
    name: string,
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; //cualquier llave|comodin
}


export const MyTextInput = ({ label, ...props }: Props) => {

    const [field] = useField(props)
    // console.log(field) //on lo que sea

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input'  {...field} {...props} />
            <ErrorMessage name={props.name} component='span' />
            {/* {
                //errors
                meta.touched && meta.error && (
                    <span className='error'>{meta.error}</span>
                )
            } */}
        </>
    )
}
