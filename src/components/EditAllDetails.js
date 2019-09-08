import React, { Component } from 'react'
import { TextField } from '@babel/core';
import { Button } from '@material-ui/core';

export class EditAllDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { searchObject, handleChange } = this.props;

        return (
            <React.Fragment>
                <TextField 
                    label='Team Name'
                    onChange={handleChange('teamName')}
                    defaultValue={searchObject.teamName}
                    style={styles.textInput}
                />
                <br />
                <TextField 
                    label='Hack Name'
                    onChange={handleChange('hackName')}
                    defaultValue={searchObject.hackName}
                    style={styles.textInput}
                />
                <br />
                <TextField 
                    label='Hack Description'
                    onChange={handleChange('hackDesc')}
                    defaultValue={searchObject.hackDesc}
                    style={styles.textInput}
                    multiline
                />
                <br />
                <TextField 
                    label='Hack Goal'
                    onChange={handleChange('hackGoal')}
                    defaultValue={searchObject.hackGoal}
                    style={styles.textInput}
                    multiline
                />
                <br />
                <TextField 
                    label='Team Leader'
                    onChange={handleChange('teamLeader')}
                    defaultValue={searchObject.teamLeader}
                    style={styles.textInput}
                />
                <br />
                <TextField 
                    label='Team Members'
                    onChange={handleChange('teamMembers')}
                    defaultValue={searchObject.teamMembers}
                    style={styles.textInput}
                    multiline
                />
                <br />
                <TextField 
                    label='Business Sponsor'
                    onChange={handleChange('businessSponsor')}
                    defaultValue={searchObject.businessSponsor}
                    style={styles.textInput}
                />
                <br />
                <TextField 
                    label='AWS / GCP Requirements?'
                    onChange={handleChange('requireAWS')}
                    defaultValue={searchObject.requireAWS}
                    style={styles.textInput}
                    multiline
                />
                <br />
                <TextField 
                    label='Dietary Requirements'
                    onChange={handleChange('dietaryRequirements')}
                    defaultValue={searchObject.dietaryRequirements}
                    style={styles.textInput}
                    multiline
                />
                <br />
                <Button variant='contained' style={styles.button} onClick={this.back}>
                    Back
                </Button>
                <Button variant='contained' color='primary' onClick={this.continue}>
                    Continue
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
    }
}

export default EditAllDetails
