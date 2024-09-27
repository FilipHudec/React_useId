import React, {FC, useState, useId} from "react";

type ControlProps = {
    label: string;
    defaultValue: number;
    onChange: (value: number) => void;
}

const InputNumber: FC<ControlProps> = ({label, defaultValue, onChange}) => {
    const [value, setValue] = useState<number>(defaultValue);
    const id = useId();

    const handleCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) > 0) { 
        setValue(Number(e.target.value))
        }
    };

    return (
         <>
        <label htmlFor={id}>{label}</label>
        <input type="range" value={value} id={id} onChange={handleCHange}/>
        <span>{value}</span>
        <button onClick={() => onChange(value)}>Submit</button>
        </>
    );
    }
    export default InputNumber;