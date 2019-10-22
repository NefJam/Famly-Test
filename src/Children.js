import React, { Component } from "react";
import { GridListTileBar, Grid, Avatar, AppBar, Typography } from '@material-ui/core';
import './App.css';

export default class Children extends Component {
  
 state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch('https://tryfamly.co/api/daycare/tablet/group?groupId=11fc220c-ebba-4e55-9346-cd1eed714620&accessToken=234ffdb8-0889-4be3-b096-97ab1679752c&institutionId=fb6c8114-387e-4051-8cf7-4e388a77b673')
      .then(response => response.json())
      .then(data => data.children)
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error } = this.state;
    return (
      
      <React.Fragment>
        <Grid item xs={12}>        
          <h1 className='Space-middle'>Elephants</h1>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item xs={12}
        >
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.slice(0, 8).map(user => {
            const {name, childId, firstName, lastName, image, small, large } = user;
            console.log(user);
            
            return (
              
                <Grid 
                  key={childId}
                  item xs={3}
                  justify="center"
                  align="center"
                  className='Space-minor'
                >
                  <img src={image.large} className='Avatar'/>
                  {/* <Avatar alt="Elephant child" src={image.large} className='Avatar'/> */}
                  <p>{name.firstName}</p>
                  
                </Grid>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
        </Grid>
      </React.Fragment>
    );
  }
}


