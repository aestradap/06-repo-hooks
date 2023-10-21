import React, {useState, useEffect} from 'react'


export const Message = () => {

    const [coord, setCoord] = useState({x: 0, y: 0});
    const {x, y} = coord;

    useEffect(() => {

        // console.log('componente montado')
        const mouseMove = ({x,y}) => {
            const targetCord = {x: x, y: y};
            setCoord(targetCord)
            console.log(targetCord);
        }
        window.addEventListener('mousemove', mouseMove);

        return () => {
            // console.log('componente desmontado')
            window.removeEventListener('mousemove', mouseMove);
        }

    }, []);


    return <>
        <h3>Eres Genial</h3>
        <p>
            x:{x} y:{y}
        </p>
    </>
}
