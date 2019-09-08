import React, { Component } from 'react'
import RegisterDescDetails from './RegisterDescDetails'
import RegisterTeamDetails from './RegisterTeamDetails';
import RegisterMiscDetails from './RegisterMiscDetails';
import RegisterConfirm from './RegisterConfirm';
import RegisterSuccess from './RegisterSuccess';

export class RegisterTeamForm extends Component {
    state = {
        step: 1,
        teamName: '',
        hackName: '',
        hackDesc: '',
        hackGoal: '',
        teamLeader: '',
        teamMembers: '',
        businessSponsor: '',
        requireAWS: '',
        dietaryRequirements: ''
    };

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

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { goHomepage } = this.props;
        const { step } = this.state;
        const { teamName, hackName, hackDesc, hackGoal, 
            teamLeader, teamMembers, businessSponsor, 
            requireAWS, dietaryRequirements } = this.state;
        const values = { teamName, hackName, hackDesc, hackGoal, 
            teamLeader, teamMembers, businessSponsor, 
            requireAWS, dietaryRequirements };

        // eslint-disable-next-line default-case
        switch(step) {
            case 1:
                return(
                    <RegisterDescDetails 
                        nextStep={this.nextStep}
                        goHomepage={goHomepage}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return(
                    <RegisterTeamDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return(
                    <RegisterMiscDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
            case 4:
                return(
                    <RegisterConfirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 5:
                return(
                    <RegisterSuccess 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            default:
                return(<div><h1>You shouldn't get here.</h1></div>)
        }
            
    }
}

export default RegisterTeamForm
