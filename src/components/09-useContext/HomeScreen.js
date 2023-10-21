import React, {useContext} from 'react'
import {UserContex} from "./UserContex";

export const HomeScreen = () => {

    const {user} = useContext(UserContex);
    console.log(user)


    return <>
        <h1>Home Screem</h1>
        <hr/>
        <pre className="container">
            {JSON.stringify(user, null, 3)}
        </pre>
    </>
}
