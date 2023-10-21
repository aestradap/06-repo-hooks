import React, {useContext} from 'react'
import {UserContex} from "./UserContex";

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContex);

    const handleClick = () => {
        setUser({});
    }


    return <>
        <h1>About Screen</h1>
        <hr/>
        <pre>
            {JSON.stringify(user, null, 3)}
        </pre>

        <button
            className="btn btn-warning"
            onClick={handleClick}
        >
            Logout
        </button>
    </>

}
