import Cell from '../Cell/Cell'
import classes from './Section.module.css'

export default function Section() {

    function count(j) {
        const arr = []
        for (let i = 0; i < j; i++) {
            arr[i] = <Cell value={i} key={i}/>
        }
        return arr
    }

    return (
        <div className={classes.section}>
            {count(9)}
        </div>
    )
}