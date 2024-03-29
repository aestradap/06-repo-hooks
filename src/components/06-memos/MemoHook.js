import React, {useMemo, useState} from 'react'
import {useCounter} from "../../hooks/useCounter";
import {ProcesoPesado} from "../../helpers/procesoPesado";


export const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => ProcesoPesado(counter), [counter]);


    return <>
        <h1>MemoHook</h1>
        <hr/>
        <h2>Counter: <small> {counter} </small></h2>
        <hr/>
        <p>{memoProcesoPesado}</p>
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
