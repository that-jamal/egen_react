import './Bro.css'
import { useState, useEffect } from 'react'

export default function Bro() {
    //const [text, setText] = useState('false')
    // <button onClick={() => setText('Bro')}>click </
    //<h1 className='text'>{text}</h1>
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer + 1)
        }, 1000)
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>click </button>
            <h1>{timer}</h1>
        </div>
    )
}
