import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log('me volvi a llamar')
    //http?
    return <>
        <small>{value}</small>
    </>
})
