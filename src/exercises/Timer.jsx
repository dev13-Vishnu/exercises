import React,{useState,useEffect} from "react";

function Timer() {
    const [time,setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        let timer ;
        if(isRunning) {
            timer = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    },[isRunning]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    }

    return(
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <h1 style={{fontSize:"2rem", marginBottom: "20px"}}>React Timer</h1>
            <h2 style={{fontSize:"3rem",margin:"20px 0"}}>{time}s</h2>
            <div>
                <button
                 onClick={startTimer} style={{
                    margin:"0 10px",
                    border:"none",
                    borderRadius:"5px",
                    padding:"10px 20px",
                    fontSize:"1rem",
                    cursor:isRunning ? "not-allowed": "pointer"
                 }}
                 disabled={isRunning}>
                    Start
                </button>
            
                <button
                 onClick={resetTimer} style={{
                    margin:"0 10px",
                    border:"none",
                    borderRadius:"5px",
                    padding:"10px 20px",
                    fontSize:"1rem"
                 }}> 
                    Reset
                </button>
            
                <button
                 onClick={stopTimer} style={{
                    margin:"0 10px",
                    border:"none",
                    borderRadius:"5px",
                    padding:"10px 20px",
                    fontSize:"1rem",
                    cursor:!isRunning ? "not-allowed": "pointer"
                 }}
                 disabled={!isRunning}>
                    Stop
                </button>
            </div>
        </div>
    )
}
export default Timer;