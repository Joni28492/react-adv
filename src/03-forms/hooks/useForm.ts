
import {ChangeEvent, useState} from 'react';


export const useForm = <T>(initState:T) =>{

    const [formData, setFromData] = useState(initState)


    //el ChangeEvent se importa de React
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        setFromData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))

    }

    const resetForm=()=>{
        setFromData({...initState})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



    return {
        ...formData,
        //properties
        formData,
        //methods
        onChange,
        resetForm,
        isValidEmail
    }
}