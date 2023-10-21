import React, {useCallback, useEffect, useState} from 'react'
import {ShowIncrement} from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num) => {
            setCounter(c => c + num);
        }, [setCounter],
    );

    useEffect(() => {
   //???
    }, [increment]);


    return <>
        <h1>Callback Hook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={increment}/>
    </>

}
