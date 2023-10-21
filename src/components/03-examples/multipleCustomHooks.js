import React from 'react'
import {useFetch} from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);


    const {loading, data} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    console.log(data)
    const {author, quote} = !!data && data[0];

    return <>
        <h1>brakingBack Guotes</h1>
        <hr/>

        {loading
            ?
            (<div className="alert alert-info text-center">
                    Loading...
                </div>
            )
            :
            (<blockquote className="blockquote text-end">
                    <p className="mb-10">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            )
        }

        <button className="btn btn-primary"
                onClick={increment}>
            Siguiente quote
        </button>
    </>
}
