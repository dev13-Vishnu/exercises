import React,{useState} from "react";
function Sum () {

    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [sum, setSum] = useState(0);

    const handleNum1Change = (e) => {
        setNum1(Number(e.target.value));
    }
    const handleNum2Change = (e) => {
        setNum2(Number(e.target.value));
    }
    
    const Add = () => {
        setSum ( num1 + num2);
    }

    return (
        <div>
            <input type="number"
            value={num1} 
            onChange={ (e) =>handleNum1Change(e)}/>
            <input type="number"
            value={num2}
            onChange={handleNum2Change} />
            <button onClick={Add}>
                Sum
            </button>
            <p> 
                {sum}</p>
        </div>
    )
}
export default Sum;