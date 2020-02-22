import React, { Component } from 'react';  // Fragment
import { makeStyles } from '@material-ui/core/styles';
import { TreeView } from '@material-ui/lab';
import TreeItem from '@material-ui/lab/TreeItem';
import { groupBy , toHierarchical}  from '../utils.js';

class Recipes extends Component {

  useStyles = makeStyles({
    root: {
      height: 110,
      flexGrow: 1,
      maxWidth: 400,
    },
  });



  renderItem = node => {
    <TreeItem key={node.id} nodeId={node.id} label={node.name} >
    </TreeItem>
  }

  renderTree = nodes => {
      nodes.map(node => 
          <TreeItem key={node.id} nodeId={node.id} label={node.name}> (
                if(node.hasOwnProperty('children')){
                  node.children.map(child => this.renderItem(child))
                
              })  
            }                                    
            </TreeItem>)
      }

      /*

 <TreeItem key={node.id} nodeId={node.id} label={node.name}>
     {Array.isArray(node.children) ? node.children.map(node => this.renderTree(node)) : null}
    </TreeItem>

{Array.isArray(node.children) ? node.children.map(node => this.renderTree(node)) : null}
      */

 /* testRender = nodes => (
      nodes.map( node => this.renderTree(node))
    )
  */
  
  /*{
    for(var i = 0 ; i < nodes.length ; i++){
        console.log(nodes[i]);
    }
  } */   

  render() {   

    var dic = groupBy(this.props.items,'Category');
    var treeData = toHierarchical(dic);


    //console.log(dic);
    //console.log(treeData);

    return (<TreeView>
              {this.renderTree(treeData)}
          </TreeView>
    );
    
  }
}

export default Recipes;


/*

className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />} 
*/

/*
return this.props.items.map((item) => (
      <h3>{item.Name}</h3>
   ))

*/
/*

<Fragment>
          <h1>Recipes</h1>
            <h3>{this.props.items.length}</h3>
            
            this.props.items.map(item =>{
             <h3>{item.Name}</h3>
          })
        </Fragment> 

*/