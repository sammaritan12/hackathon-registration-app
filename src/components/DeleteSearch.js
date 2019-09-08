import React, { Component } from 'react'
import { TextField, Button, CircularProgress, ListItem, ListItemText, Grid } from '@material-ui/core';

export class DeleteSearch extends Component {
    state = {
        search: '',
        loading: false,
        items: []
    };

    search = e => {
        e.preventDefault();
        // TODO: Fetch call to AWS Lambda processing
        this.setState({loading: true}, () =>
        fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              items: [
                  {
                    teamName: 'Apple Team',
                    hackName: 'Berry Good Hack',
                    hackDesc: 'C',
                    hackGoal: 'D',
                    teamLeader: 'E',
                    teamMembers: 'F',
                    businessSponsor: 'G',
                    requireAWS: 'H',
                    dietaryRequirements: 'I'
                  },
                  {
                    teamName: 'Avocado Team',
                    hackName: 'Brilliant Hack',
                    hackDesc: 'C',
                    hackGoal: 'D',
                    teamLeader: 'E',
                    teamMembers: 'F',
                    businessSponsor: 'G',
                    requireAWS: 'H',
                    dietaryRequirements: 'I'
                  },
                  {
                    teamName: 'Aubergine Team',
                    hackName: 'Banana Hack',
                    hackDesc: 'C',
                    hackGoal: 'D',
                    teamLeader: 'E',
                    teamMembers: 'F',
                    businessSponsor: 'G',
                    requireAWS: 'H',
                    dietaryRequirements: 'I'
                  }
              ]
            })
          }
        ).then(response => response.json())
        .then(r => this.setState({items: r.items, loading: false})));
    }

    continue = (e, key) => {
        e.preventDefault();
        this.props.setSearchObject(this.state.items[key]);
        this.props.nextStep();
    }

    render() {
        return (
            <React.Fragment>
                <TextField
                    id="input-with-icon-textfield"
                    label="Team Name"
                    onChange={this.props.handleChange}
                    style={styles.textInput}
                />
                <Button variant='contained' onClick={this.search} style={styles.button}>
                    Search
                </Button>
                <br />
                {this.state.loading ? <CircularProgress /> : null}
                <Grid container justify='center'>
                    {this.state.items.map((i, k) => 
                        <ListItem button id={k} onClick={e => this.continue(e, k)}>
                            <ListItemText primary={i.teamName} secondary={i.hackName} style={styles.listItem}/>
                        </ListItem>
                        )}
                </Grid>
                < br/>
                <Button variant='contained' href='/' style={styles.button}>
                    Back
                </Button>
                
            </React.Fragment>
        )
    }
}

const styles = {
    button: {
        margin: 20
    },
    textInput: {
        width: '20em'
    },
    listItem: {
        textAlign: 'center'
    }
}

export default DeleteSearch
