import React, { Component, Fragment } from 'react';
import './App.css';
import Recipes from './components/Recipes';

class App extends Component {
   state = {
        items :  [          
          { Name : 'Choclate Cake' , Category : 'Deserts' } , { Name : 'Grilled Chicken', Category : 'Meat'} , {Name : 'Dal',  Category : 'Vegan'} ,
          { Name : 'Apple Cramble' , Category : 'Deserts' } , { Name : 'Steak', Category : 'Meat'} , {Name : 'Roasted Coliflower',  Category : 'Vegan'}]
   }


  render() {   
    return (
      <Fragment>
        <h1> hello</h1>
        <Recipes items={this.state.items}/> 
      </Fragment>
    )
  }
}

export default App;




/*
 <h1>{this.state.items.length}</h1> 
<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/