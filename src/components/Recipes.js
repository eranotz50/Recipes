import React, { Component, Fragment } from 'react';


class Recipes extends Component {
 
  render() {   
    return this.props.items.map((item) => (
      <h3>{item.Name}</h3>
   ))
  }
}

export default Recipes;

/*

<Fragment>
          <h1>Recipes</h1>
            <h3>{this.props.items.length}</h3>
            
            this.props.items.map(item =>{
             <h3>{item.Name}</h3>
          })
        </Fragment> 

*/