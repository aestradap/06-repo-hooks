import React, {useContext} from 'react';
import {UserContex} from "./UserContex";

export const LoginScreen = () => {

    const {setUser} = useContext(UserContex);


    return <>
        <h1>LoginScreen</h1>
        <hr/>
        <button
            className="btn btn-primary"
            onClick={() => setUser({id: '123', name: 'Alain', email: 'aestradap17@gmail.com'})}
        >
            login
        </button>

    </>
}
