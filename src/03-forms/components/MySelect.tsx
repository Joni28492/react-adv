import { ErrorMessage, useField } from 'formik'


interface Props {
    label: string,
    name: string,
    placeholder?: string;
    [x: string]: any; //cualquier llave|comodin
}


export const MySelect = ({ label, ...props }: Props) => {

    const [field] = useField(props)
    // console.log(field) //on lo que sea

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select  {...field} {...props} />
            <ErrorMessage name={props.name} component='span' />
            {/* {
                meta.touched && meta.error && (
                    <span className='error'>{meta.error}</span>
                )
            } */}
        </>
    )
}
