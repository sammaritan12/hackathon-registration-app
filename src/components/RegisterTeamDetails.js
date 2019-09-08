import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NavigationBar from './NavigationBar';

export class RegisterTeamDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <NavigationBar title='Enter Team Details' />
                <TextField 
                    label='Team Leader'
                    onChange={handleChange('teamLeader')}
                    defaultValue={values.teamLeader}
                    style={styles.textInput}
                />
                <br />
                <TextField 
                    label='Team Members'
                    onChange={handleChange('teamMembers')}
                    defaultValue={values.teamMembers}
                    style={styles.textInput}
                    multiline
                />
                <br />
                <TextField 
                    label='Business Sponsor'
                    onChange={handleChange('businessSponsor')}
                    defaultValue={values.businessSponsor}
                    style={styles.textInput}
                />
                <br />
                <Button variant='contained' style={styles.button} onClick={this.back}>
                    Back
                </Button>
                <Button variant='contained' color='primary' onClick={this.continue}>
                    Continue
                </Button>
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

export default RegisterTeamDetails
