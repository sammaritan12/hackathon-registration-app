import React, { Component } from 'react'
import NavigationBar from './NavigationBar';

export class RegisterSuccess extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar title='Registration' />
                <h1>
                    Thank you for your submission.
                </h1>
                <p>
                    You have been registered for the Hackathon.
                </p>
            </React.Fragment>
        )
    }
}

export default RegisterSuccess
