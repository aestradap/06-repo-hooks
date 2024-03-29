import React, {useState} from 'react'
import {useCounter} from "../../hooks/useCounter";
import {Small} from "./Small";


export const Memorice = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState();

    return <>
        <h1>Memorice</h1>
        <hr/>
        <h2>Counter: <Small value={counter}/></h2>
        <button
            className="btn btn-primary"
            onClick={increment}
        >
            +1
        </button>
        <button
            className="btn btn-outline-primary ml-3"
            onClick={() => {
                setShow(!show);
            }}
        >
            show/hide {JSON.stringify(show)}
        </button>
    </>
}
