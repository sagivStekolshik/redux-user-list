import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';


class App extends Component {

  render() {
    const user = ["one", "two", "3"]

    return (
      <div className="flex-center">
        <Paper zDepth={3} className="paper">
          <List style={{"padding-bottom": 0}}>
            <Subheader>User List</Subheader>
            <ListItem 
              primaryText="All mail" 
              nestedItems={[<Subheader>Posts</Subheader>,...user.map((el,idx) => 
                <ListItem
                  key={idx}
                  primaryText={el} 
                />
              )]}
            />
            <ListItem 
              primaryText="Trash" 
            />
            <ListItem 
              primaryText="Spam" 
            />
            <ListItem 
              primaryText="Follow up" 
            />
          </List>
          </Paper>
      </div>
        );
  }
}

export default App;
