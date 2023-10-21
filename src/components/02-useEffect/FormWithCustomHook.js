import React, {useEffect, useState} from 'react'
import {useForm} from "../../hooks/useForm";


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambio');
    }, [email]);


    function handleSubmit(e) {
        e.preventDefault()
        console.log(formValues)
    }

    return <form onSubmit={handleSubmit}>
        <h1>FormWithCustomHook</h1>
        <hr/>
        <div className='form-group '>
            <input
                type='text'
                name='name'
                className='form-control m-2'
                placeholder='Tu nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
            />

            <input
                type='text'
                name='email'
                className='form-control m-2'
                placeholder='Tu email'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
            />

            <input
                type='password'
                name='password'
                className='form-control m-2'
                placeholder='password'
                autoComplete='off'
                value={password}
                onChange={handleInputChange}
            />
        </div>

        <button type="submit" className="btn btn-primary m-2">
            Guardar
        </button>
    </form>
}
