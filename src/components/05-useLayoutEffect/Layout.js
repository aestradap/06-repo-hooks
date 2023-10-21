import React, {useLayoutEffect, useRef, useState} from 'react'
import {useFetch} from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";


export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {quote} = !!data && data[0];

    const pTag = useRef();
    const [boxsize, setBoxsize] = useState({});


    useLayoutEffect(() => {
        setBoxsize(pTag.current.getBoundingClientRect());

    }, [quote]);


    return <>
        <h1>brakingBack Guotes</h1>
        <hr/>

        <blockquote className="blockquote">
            <p
                className="mb-10"
                ref={pTag}
            >
                {quote}
            </p>
        </blockquote>

        <pre>
            {JSON.stringify(boxsize, null, 3)}
        </pre>


        <button className="btn btn-primary"
                onClick={increment}>
            Siguiente quote
        </button>
    </>
}
