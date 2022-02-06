import React from "react";
import dataset from "./characters.json"

function Header(props){
  return(
    <>
      <h1>High Score: {props.highScore}</h1>
      <h3>Current Score: {props.currScore}</h3>
    </>
  )
}

function Card(props){
  return(
    <div onClick = {()=>props.handleClick(props.id)}>

      <img src={props.image} alt=""></img>

    </div>
  )
}


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
          element.clicked = false
        })
      }
      
    });
  }

  increament = ()=>{
    this.setState({currScore: this.state.currScore + 1})
  }

  render(){
    return(
      <div>
        <Header

          highScore = {this.state.highScore}
          currScore = {this.state.currScore}

        ></Header>

        {this.state.dataset.map(data =>(
          <Card

            handleClick = {this.handleClick}
            key = {data.id}
            id = {data.id}
            image = {data.image}

          ></Card>
        ))}
      </div>
    )
  }


}







export default App;
