import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NavigationBar from './NavigationBar';

export class RegisterMiscDetails extends Component {
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
                <NavigationBar title='Enter Extra Details' />
                <TextField 
                    label='AWS / GCP Requirements?'
                    onChange={handleChange('requireAWS')}
                    defaultValue={values.requireAWS}
                    style={styles.textInput}
                    multiline
                />
                <br />
                <TextField 
                    label='Dietary Requirements'
                    onChange={handleChange('dietaryRequirements')}
                    defaultValue={values.dietaryRequirements}
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

export default RegisterMiscDetails
