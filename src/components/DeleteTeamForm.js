import React, { Component } from 'react'
import NavigationBar from './NavigationBar';
import DeleteSearch from './DeleteSearch';
import DeleteConfirm from './DeleteConfirm';
import DeleteSuccess from './DeleteSuccess';

export class DeleteTeamForm extends Component {
    state = {
        step: 1,
        searchTerm: '',
        searchObject: {}
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Proceed to next step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    setSearchObject = obj => {
        this.setState({searchObject: obj})
    }

    render() {
        const { step } = this.state;

        const switcher = () => {
            // eslint-disable-next-line default-case
            switch (step) {
                case 1:
                    return (<DeleteSearch 
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        setSearchObject={this.setSearchObject}
                    />)
                case 2:
                    return (<DeleteConfirm 
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        searchObject={this.state.searchObject}
                    />)
                case 3:
                    return (<DeleteSuccess 
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />)
                default:
                    return(<h1>You shouldn't get here</h1>)

                
            }
        }

        return (
            <React.Fragment>
                <NavigationBar title='Remove Team' />
                {switcher()}
                
            </React.Fragment>
        )
    }
}

export default DeleteTeamForm
