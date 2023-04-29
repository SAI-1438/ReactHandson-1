import React from "react";
import './Style.css';

function FunctionalComponent()
{
    return(
        <div className="boxf">
            <h1>This is created using functional component</h1>
            <p className="p"><b>This is done using external CSS</b></p>
            <p style={{color:"blue"}}><b>This is done using inline CSS</b></p>
        </div>
    );
}

export default FunctionalComponent;