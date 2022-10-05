import React, { useState } from 'react';

const loggedStyle = {
    color: "blue"
} 
const unLoggedStyle = {
    color: "tomato",
    fontWeight: "bolt"
} 

const GreetingStyled = (props) => {

    const [log, setLog] = useState(false);

    const handlerLog = () => {
        console.log("buenasssss")
        setLog(!log)
    }


    return (
        <div style={log ? loggedStyle : unLoggedStyle}>
        {log===true? (
            <p>Hola, {props.name}</p>

        ): <p>Please Login</p>}
            <button onClick={() => {handlerLog()}}>
                { log? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default GreetingStyled;
