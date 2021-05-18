import classes from './InputRange.module.sass'

type InputProps = {
    name: string,
    min: number,
    max: number,
    step: number,
    defValue?: number,
    onChange: Function
}

export default function InputRange({name, min, max, step, defValue, onChange}: InputProps): JSX.Element {
    return (
        <input
            className={classes.inputRange}
            min={min}
            max={max}
            step={step}
            name={name}
            type={'range'}
            defaultValue={defValue}
            onMouseUp={(event) => {
                const target = event.target as HTMLInputElement
                onChange(
                    target.name,
                    +target.value
                )
            }
            }
            // onChange={(event) => {
            //     onChange(
            //         event.target.name,
            //         +event.target.value
            //     )
            // }}
        />
    )
}
