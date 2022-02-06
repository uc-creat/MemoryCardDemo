import React from "react";
import dataset from "./characters.json"


class App extends React.Component{

  state = {
    dataset,
    highScore:0,
    currScore:0,
  }

  handleClick = (id)=>{
    this.score(id);
  }

  score = (id)=>{
    this.state.dataset.forEach(element => {
      if(element.id === id && element.clicked === false){
        element.clicked = true;
        this.increament();
      }
      else if(element.id === id && element.clicked === true){

        if(this.state.currScore > this.state.highScore){
          this.setState({highScore:this.state.currScore})
        }
        
        this.setState({currScore:0})
        this.state.dataset.forEach(element => {
          element.clicked = false;
        })
      }
      
    });
  }


}







export default App;
