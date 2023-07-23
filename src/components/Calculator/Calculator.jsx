import React, { useEffect, useRef, useState } from "react";
import "./Calculator.css";
import usePrevious from "../Hooks/usePrevious";
const Calculator = () => {
    const [value, setValue] = useState("")
    const previousValue = useRef(null);
    const [output, setOutput] = useState(0)
    useEffect(() => {
        setOutput(Number(value))
    }, [value]);
    
    const calculate = (islem) =>{
        if(islem === "del"){
            // eslint-disable-next-line react-hooks/rules-of-hooks
            console.log("deleted");
        }
        if(islem === "/"){
            setValue(value+"/")
            console.log("/");
        }
        if(islem === "*"){
            setValue(value+"*")
            console.log("*");
        }
        if(islem === "+"){
            setValue(value+"+")
            console.log("+");
        }
        if(islem === "-"){
            setValue(value+"-")
            console.log("-");
        }
        if(islem === "="){
            setValue(value+"=")
            console.log("=");
        }
    }
    return (
        <div className="calculator">
            <div className="header-calculator">
                {value}
            </div>
            <div className="inner-calculator">
                <div className="line">
                    <div onClick={() => setValue(0)} className="water-green ac">AC</div>
                    <div onClick={() => calculate("del")} className="water-green">DEL</div>
                    <div onClick={() => calculate("/")} className="water-green">/</div>
                </div>
                <div className="line">
                    <div onClick={() => setValue(value+"1")} className="water-green">1</div>
                    <div onClick={() => setValue(value+"2")} className="water-green">2</div>
                    <div onClick={() => setValue(value+"3")} className="water-green">3</div>
                    <div onClick={() => calculate("*")} className="water-green">*</div>
                </div>
                <div className="line">
                    <div onClick={() => setValue(value+"4")} className="water-green">4</div>
                    <div onClick={() => setValue(value+"5")} className="water-green">5</div>
                    <div onClick={() => setValue(value+"6")} className="water-green">6</div>
                    <div onClick={() => calculate("+")} className="water-green">+</div>
                </div>
                <div className="line">
                    <div onClick={() => setValue(value+"7")} className="water-green">7</div>
                    <div onClick={() => setValue(value+"8")} className="water-green">8</div>
                    <div onClick={() => setValue(value+"9")} className="water-green">9</div>
                    <div onClick={() => calculate("-")} className="water-green">-</div>
                </div>
                <div className="line">
                    <div onClick={() => setValue(value+".")} className="water-green">.</div>
                    <div onClick={() => setValue(value+"0")} className="water-green">0</div>
                    <div onClick={() => calculate("=")} className="water-green equal">=</div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
