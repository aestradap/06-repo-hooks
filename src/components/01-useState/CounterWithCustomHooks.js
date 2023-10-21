import React from 'react'
import {useCounter} from "../../hooks/useCounter";

import './counter.css';


export const CounterWithCustomHooks = () => {

    const {state, increment, reset, decrement} = useCounter(100);

    return <>
        <h1>CounterWithCustomHooks: {state}</h1>
        <button className='btn btn-primary'
                onClick={() => increment(2)}>
            +
        </button>
        <button className='btn btn-primary'
                style={{margin: 10}}
                onClick={reset}>
            Reset
        </button>
        <button className='btn btn-primary'
                onClick={() => decrement(2)}>
            -
        </button>
    </>

}
