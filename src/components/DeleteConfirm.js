import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { List, ListItem, ListItemText, Grid, CircularProgress } from '@material-ui/core';

export class DeleteConfirm extends Component {
    state = {
        loading: false
    }

    continue = e => {
        e.preventDefault();
        // TODO: Fetch call to AWS Lambda processing
        this.setState({loading: true}, () =>
        fetch('https://ktwphhsh24.execute-api.us-east-2.amazonaws.com/dev/registerteam',
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstParam: 'yourValue',
              secondParam: 'yourOtherValue',
            })
          }
        ).then(response => response.json())
        .then(r => console.log(r))
        .then(() => this.props.nextStep()));
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { searchObject: {teamName, hackName, hackDesc, 
            hackGoal, teamLeader, teamMembers, businessSponsor, 
            requireAWS, dietaryRequirements} } = this.props;

        return (
            <React.Fragment>
                <Grid container justify='center'>
                <List>
                    <ListItem>
                        <ListItemText primary='Team Name' secondary={teamName}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Hack Name' secondary={hackName}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Hack Description' secondary={hackDesc}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Hack Goal' secondary={hackGoal}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Team Leader' secondary={teamLeader}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Team Members' secondary={teamMembers}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Business Sponsor' secondary={businessSponsor}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='AWS / GCP Requirements' secondary={requireAWS}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Dietary Requirements' secondary={dietaryRequirements}/>
                    </ListItem>
                </List>
                </Grid>
                    
                    <br />
                    <Button variant='contained' style={styles.button} onClick={this.back}>
                        Back
                    </Button>
                    <Button variant='contained' color='primary' onClick={this.continue}>
                        Submit
                    </Button>
                    <br />
                    {this.state.loading ? <CircularProgress /> : null}
            </React.Fragment>
        );
    }
}

const styles = {
    button: {
        margin: 20
    },
    textInput: {
        width: '20em'
    }
}

export default DeleteConfirm
