import React, { Component } from "react";
import "./App.css"
import Child1 from "./Child1";import Child2 from "./Child2";
import * as d3 from "d3"
import sdata from "./SampleDataset.csv"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};

  }
  componentDidMount(){
    var self = this
    d3.csv(sdata,function(d){
      return{
        x:parseInt(d.x),
        y:parseInt(d.y),
        category:d.category
      }
    }).then(function(csv_data){
      self.setState({data:csv_data})
    
    })
    .catch(function(err){
      console.log(err)
    })
  }
  render() {
    console.log("Render is called")
    return <div className="parent"> 
      <div className="child1"><Child1 data1 = {this.state.data}></Child1></div>
      <div className="child2"><Child2 data2 = {this.state.data}></Child2>
        <select>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>;
  }
}

export default App
