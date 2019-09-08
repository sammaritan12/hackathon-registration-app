import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NavigationBar from './NavigationBar';

export class RegisterDescDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.goHomepage();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <NavigationBar title='Enter Hack Details' />
                <TextField 
                    label='Team Name'
                    onChange={handleChange('teamName')}
                    defaultValue={values.teamName}
                    style={styles.textInput}
                />
                <br />
                <TextField 
                    label='Hack Name'
                    onChange={handleChange('hackName')}
                    defaultValue={values.hackName}
                    style={styles.textInput}
                />
                <br />
                <TextField 
                    label='Hack Description'
                    onChange={handleChange('hackDesc')}
                    defaultValue={values.hackDesc}
                    style={styles.textInput}
                    multiline
                />
                <br />
                <TextField 
                    label='Hack Goal'
                    onChange={handleChange('hackGoal')}
                    defaultValue={values.hackGoal}
                    style={styles.textInput}
                    multiline
                />
                <br />
                <Button variant='contained' style={styles.button} href='/'>
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

export default RegisterDescDetails
