import React, { useState ,useRef} from 'react';

function InputNumber(props){
 
    const { value , defaultValue , onChange} = props ;
    const [value,setValue] = useState(value);
    const input = useRef(null) ;
    return (
        <div>
        defaultValue !== '' && defaultValue !== null && defaultValue !== undefined 
        ? <input type= 'number' defaultValue = {defaultValue}  ref = {input => input = input} onChange= {e=>{ onChange && onChange(input.current.value) }} />
        :
        <input type= 'number' value = {value} onChange= {e=>{ setValue(e.target.value); onChange && onChange(e.target.value)}} />
        </div>
    )
}