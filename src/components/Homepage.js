import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import NavigationBar from './NavigationBar';

export class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar title='Hackathon Teams'/>
                <Button variant='contained' style={styles.button} color='primary' href='/register'>
                    Register Team
                </Button>
                <br />
                <Button variant='contained' style={styles.button} href='/edit'>
                    Edit Team
                </Button>
                <br />
                <Button variant='contained' style={styles.button} color='secondary' href='/delete'>
                    Remove Team
                </Button>
            </React.Fragment>
        )
    }
} 

const styles = {
    button: {
        margin: 10,
        width: '20em'
    },
    textInput: {
        width: '20em'
    }
}

export default Homepage
