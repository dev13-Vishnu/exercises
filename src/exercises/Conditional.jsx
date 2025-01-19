import { useState } from "react";

function Conditional (){
    const [isLoggedIn,setIsloggedIn] = useState(false);

    const toggleIsLoggedIn = () => {
        setIsloggedIn(!isLoggedIn);
    }

    return (
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <h1>Conditional Rendering Example</h1>
            {isLoggedIn ? (
                <p>Welcome User. You are logged in.</p>
            ): (<p>Please Log In to Continue. 🔒</p>)}

            <button onClick={toggleIsLoggedIn} style={{padding:"10px 20px",fontSize:"16px"}}>{isLoggedIn?"Log Out":"Log In"}</button>
        </div>
    )
}
export default Conditional;