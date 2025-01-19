import { useState } from "react";

function Toggle() {
    const [isVisible,setIsVisible] = useState(false);
    const toggleMessage = () => {
        setIsVisible((prev) => !prev)
    }
    return (
        <div>
            <h1>Toggle Visibility Example</h1>
            <button onClick={toggleMessage}>{isVisible?"Hide Message": "Show Message"}</button>
            {isVisible && <p>This is the toggle message!</p>}
        </div>
    )

}

export default Toggle;