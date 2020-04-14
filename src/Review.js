import React, { Component } from 'react';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';


export default class Review extends Component{
  constructor(props) {
    super(props)
    this.state = {building: "", clean: "", traffic: "", floor: ""}
  }
  
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
  }
  
  change = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <h1 align="center">Bryan Zheng SWE 432</h1>
          <h1 align="center">Bathroom Review</h1>
            <form onSubmit={this.submitHandler}>
            <div className= "building" align="center">
                <p>Please enter building name:</p>
                <input type="text" name = "building" value ={this.state.building} onChange ={e => this.change(e)}/>
            </div>
            <div className= "floor" align="center">
                <p>Please enter floor:</p>
                <input type="text" name = "floor" value ={this.state.floor} onChange ={e => this.change(e)}/>
            </div>
            <div className= "Clean" align="center">
              <p>Please select clean level:</p>
              <RadioGroup aria-label="clean level" name="clean" value= {this.state.clean} onChange={e => this.change(e)}>
              <FormControlLabel value="very clean" control={<Radio />} label="very clean" />
              <FormControlLabel value="clean" control={<Radio />} label="clean" />
              <FormControlLabel value="dirty" control={<Radio />} label="dirty" />
              <FormControlLabel value="very dirty" control={<Radio />} label="very dirty" />
              </RadioGroup>
            </div>
             <div className= "Traffic" align="center">
             <p>Please select traffic level:</p>
              <RadioGroup aria-label="traffic level" name="traffic" value= {this.state.traffic} onChange={e => this.change(e)}>
              <FormControlLabel value="very busy" control={<Radio />} label="very busy" />
              <FormControlLabel value="busy" control={<Radio />} label="busy" />
              <FormControlLabel value="quiet" control={<Radio />} label="quiet" />
              <FormControlLabel value="very quiet" control={<Radio />} label="very quiet" />
              </RadioGroup>
            </div>
            <div className= "button" align="center">
              <button type = "submit" >Submit
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

