import React, { Component, Fragment } from 'react';  // Fragment
import { makeStyles } from '@material-ui/core/styles';
import { TreeView } from '@material-ui/lab';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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

  renderTree = roots => {(
          <TreeItem key="1" nodeId="1" label="S1" expanded="true" content="ssss"></TreeItem>  
    )}

   /*

   {roots.map(root => this.renderItem(root))}                           
   {root.hasOwnProperty('children') && root.children.map(child => this.renderItem(child))}                      
   
   useStyles = makeStyles({
        root: {
          height: 110,
          flexGrow: 1,
          maxWidth: 400,
        },

<TreeItem key={root.id} nodeId={root.id} label={root.name} content="kill me" expanded="true"> 
                 
              </TreeItem>

      });*/



  render() {   

    //const classes = this.useStyles();
    var dic = groupBy(this.props.items,'Category');
    var treeData = toHierarchical(dic);



    return (
      <Fragment>
          <h3> Recipes</h3>
          <TreeView defaultCollapseIcon={<ExpandMoreIcon />} 
                defaultExpandIcon={<ChevronRightIcon />} >
                <TreeItem key="1" nodeId="1" label="S1" expanded="true" content="ssss">
                  <TreeItem key="11" nodeId="11" label="S11" expanded="true" content="ssss2323"/>
                </TreeItem>  
          </TreeView>
        </Fragment>
    );
    
    
  }
}

export default Recipes;



/*
<TreeView>
              <TreeItem nodeId="1" name="p1" content="p1" expanded="true" >
                <TreeItem nodeId="11" name="c1" content="c1" />
              </TreeItem>
          </TreeView>

*/


 /*(<TreeView className={classes.root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpanded={['root']}
                defaultExpandIcon={<ChevronRightIcon />}>
              {this.renderTree(treeData)}
          </TreeView>*/




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