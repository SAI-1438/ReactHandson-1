import React, {Component}  from "react";
import './Style.css';


export class ClassComponent extends Component {
    render(){
        return(
            <div className="boxc">
                <h1>This is created using class component</h1>
                <p className="p"><b>This is done using external CSS</b></p>
            <p style={{color:"blue"}}><b>This is done using inline CSS</b></p>
            </div>
        );
    }
}

export default ClassComponent;