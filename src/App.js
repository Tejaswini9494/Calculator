
import React , {Component} from 'react';
import './App.css';
import KeyPadComponent from "./components/KeyPadComponent";
import ResultComponent from "./components/ResultComponent";


class App extends Component{
  constructor(){
    super();

    this.state = {
      result : ""
    }
  }

  calculate = () => {
    try{
      this.setState({
        result : (eval(this.state.result) || "" ) + ""
      })
    }catch(e){
      this.setState({
        result : "error" 
      })
    }
  };

  reset = () => {
    this.setState({
      result : ""
    })
  }

  backspace = () => {
    this.setState({
      result : this.state.result.slice(0 , -1)
    })
  };

  onClick = button => {
    if(button == "="){
      this.calculate();
    }

    else if(button == "C"){
      this.reset();
    }

    else if(button == "CE"){
      this.backspace();
    }

    else{
      this.setState({
        result : this.state.result + button
      })
    }
  };


  render(){
    return(
      <div className = "calculator-body">
        <h2>Calculator</h2>
        <ResultComponent result = {this.state.result} />
        <KeyPadComponent onClick = {this.onClick} />

      </div>
    );
  }


}

export default App;


