import React, { Component } from 'react'
import NavigationBar from './NavigationBar';
import EditSearch from './EditSearch';
import EditAllDetails from './EditAllDetails';
import EditConfirm from './EditConfirm';
import EditSuccess from './EditSuccess';

export class EditTeamForm extends Component {
    state = {
        step: 1,
        searchTerm: '',
        searchObject: {}
    }

    handleChange = input => e => {
        this.setState({ [this.state.searchObject.input]: e.target.value });
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
                    return (<EditSearch
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        setSearchObject={this.setSearchObject}
                    />)
                case 2:
                    return (<EditAllDetails 
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        searchObject={this.state.searchObject}
                    />)
                case 3:
                    return (<EditConfirm 
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />)

                case 4:
                        return (<EditSuccess
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
                <NavigationBar title='Edit Hack Team' />
                {switcher()}
            </React.Fragment>
        )
    }
}

export default EditTeamForm
