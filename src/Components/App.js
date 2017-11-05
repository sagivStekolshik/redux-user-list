import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { get } from 'axios';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';


class App extends Component {

  componentWillMount() {
    get("https://jsonplaceholder.typicode.com/users").then( res => {
      this.props.GetUsers(res.data);
    })
  }

  render() {

    return (
      <div className="flex-center">
        <Paper zDepth={3} className="paper">
          <List style={{ "paddingBottom": 0 }}>
            <Subheader>User List</Subheader>
            {this.props.users.map(el => (
              <ListItem
              key={el.id}
              primaryText={el.name}
            />  
            ))}
          </List>
        </Paper>
      </div>
    );
  }
}

export default connect(state => state, dispatch => ({
  GetUsers: (users) => {
    dispatch({
      type: "Get_users",
      users
    })
  }
}))(App);


/*
<ListItem
              primaryText="All mail"
              nestedItems={user.map((el, idx) =>
                <ListItem
                  key={idx + 1}
                  primaryText={el}
                />
              )}
            />

*/