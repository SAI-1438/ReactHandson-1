import React, {Component}  from "react";
import FunctionalComponent from "./Components/FunctionalComponent";
import ClassComponent from "./Components/ClassComponent";
import './Components/Style.css';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      FuncValue:false,
      ClassValue:false,
    };
  }

  toggleFunComp = () => {
    this.setState((prevState) => ({
      FuncValue:!prevState.FuncValue,
    }));
  };

  toggleClassComp = () => {
    this.setState((prevState) => ({
      ClassValue:!prevState.ClassValue,
    }))
  }
  render(){
    return (
      <div>
        <h1 className="h">Styling using Functional and Class Component</h1>
        <div className="buts">
          <button onClick={this.toggleFunComp}>To see styling in functional component</button>
          <button onClick={this.toggleClassComp}>To see styling in class component</button>
        </div>     
        <div className="boxs">
          {this.state.FuncValue && <FunctionalComponent/>}
          {this.state.ClassValue && <ClassComponent/>}
        </div>
      </div>
    );
  }
}

export default App;
