import React, {FC, useState, useId} from "react";
import InputNumberCSS from "./InputNumber.module.css";

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
         <div className={InputNumberCSS.container}>
             <label htmlFor={id}>{label}</label>
          <input className={InputNumberCSS.InputRange} type="range" value={value} id={id} onChange={handleCHange}/>
         <span className={InputNumberCSS.value}>{value}</span>
         <button className={InputNumberCSS.input__btn} onClick={() => onChange(value)}>Submit</button>
         </div>
        </>
    );
    }
    export default InputNumber;

