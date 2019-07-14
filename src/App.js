import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class App extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
      console.log("values: " + values)

      console.log("Current State is: " + JSON.stringify(values));
      alert("Current State is: " + JSON.stringify(values));
      this.props.postFeedback(values);
      this.props.resetFeedbackForm();
    }  
    render() {
      return (
        <div className="App">
          <nav className="navbar bg-light titlefont">
            <span className="navbar-size-new mb-0 h1 titlefont">Alchemy</span>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md m-1">
                <h1 className="homefont"><b>The platform built to close enterprise deals faster.</b></h1>
                <h5 className="subfont">Alchemy gives sales leads the information they need to close enterprise deals in a clean, digestible format.</h5>
                <div className="formstyle">
                <form className="form-inline formstyle" action="https://formspree.io/bryanshankman@gmail.com " method="POST">
                  <input type="email" name="_replyto" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Enter Email"/>              
                  <button type="submit" value="Send" className="btn btn-secondary rounded mb-2">Request Access</button>
                </form>
                </div>      
              </div>
              <div className="col-md m-1 imagestyle" >
                <img src={"datastuff.png"} className="App-logo imagestyle" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      );
  }
};
export default App;
