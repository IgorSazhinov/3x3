import { useState } from 'react'
import classes from './Cell.module.css'

export default function Cell(props) {
    const [color, setColor] = useState('red')

    function redOrGreen() {
        let col = ''
        if(color != 'green') {
            return col = 'green'
        }
        return col = 'blue'
    }

    const cellClict = () => {
        setColor(redOrGreen())
    }

    return (
        <div className={classes.cell} value={props.value + 1} onClick={cellClict} style={{background: color}}>
            <p>{props.value + 1}</p>
        </div>
    )
}