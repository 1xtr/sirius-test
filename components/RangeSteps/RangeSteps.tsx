import {useState} from "react"
import classes from './RangeSteps.module.sass'

type RangeStepsProps = {
    min: number,
    max: number,
    step?: number
}

export default function RangeSteps({min, max, step = 1}: RangeStepsProps) {

    function arrayFill() {
        // console.log('array fill')
        let a = []
        for (let i = min; i <= max; ) {
            a.push(i)
            i += step
        }
        return a
    }

    const [Steps] = useState(() => arrayFill())

    return (<div className={classes.RangeStepsBlock}>
        {Steps.map(value => (
            <span
                key={value}
                className={classes.RangeSteps}
            >
            {value}
        </span>
        ))}
    </div>)
}
