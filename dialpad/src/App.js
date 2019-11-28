import React, { Component } from 'react';
import './App.css';

class Dialpad extends React.Component{
  constructor(props){
  super(props);
  this.state={
    value : this.props.value

  };
  // this.numberone=this.numberone.bind(this);
  // this.numbertwo=this.numbertwo.bind(this);
  // this.numberthree=this.numberthree.bind(this);
  // this.numberfour=this.numberfour.bind(this);
  // this.numberfive=this.numberfive.bind(this);
  // this.numbersix=this.numbersix.bind(this);
  // this.numberseven=this.numberseven.bind(this);
  // this.numbereight=this.numbereight.bind(this);
  // this.numbernine=this.numbernine.bind(this);
  // this.numberzero=this.numberzero.bind(this);
  this.TakeEvent=this.TakeEvent.bind(this);
}
// numberone(){
  // this.numberone=this.numberone.bind(this);
  // this.numbertwo=this.numbertwo.bind(this);
  // this.numberthree=this.numberth
//   this.setState({
//     value:this.state.value + "1"

//   });
// }
// numbertwo(){
//   this.setState({
//     value:this.state.value + "2"
//   });
// }
// numberthree(){
//   this.setState({
//     value:this.state.value + "3"
  // this.numberone=this.numberone.bind(this);
  // this.numbertwo=this.numbertwo.bind(this);
  // this.numberthree=this.numberth
//   this.setState({
//     value:this.state.value + "5"
//   });
// }
// numbersix(){
//   this.setState({
//     value:this.state.value + "6"
//   });
// }
// numberseven(){
//   this.setState({
//     value:this.state.value + "7"
//   });
// }
// numbereight(){
//   this.setState({
//     value:this.state.value + "8"
//   });
// }
// numbernine(){
//   this.setState({
//     value:this.state.value + "9"
//   });
// }
// numberzero(){
//   this.setState({
//     value:this.state.value + "0"

//   });
// }
TakeEvent(event){
  let value=event.target.value;
  if (value){
    this.setState({
      value:parseInt(value)

    });

  }
  else{
    this.setState({
      value:0
    });
  }
}
Plus(){
  let temp
  

  
}

  render(){
    return(
      <div class="calling-screen"> 
      <input type="text" value={this.state.value} onChange={this.TakeEvent}/>
      <div class="dialling-number">
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'7'})}>7</button>
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'8'})}>8</button>
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'9'})}>9</button><br></br>
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'4'})}>4</button>
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'5'})}>5</button>
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'6'})}>6</button><br></br>
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'1'})}>1</button>
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'2'})}>2</button>
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'3'})}>3</button><br></br>
        <button className="button1" onClick={()=>this.setState({value:this.state.value+'0'})}>0</button>
<h1>ggg</h1>
        </div>
        </div>
  
       
      

      
    )
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Dialpad value={0}/>
          
        </header>
       
      </div>
    );
  }
}

export default App;
