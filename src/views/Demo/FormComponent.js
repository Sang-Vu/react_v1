import React from "react";

class FormComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    }

    handleSubmit = (id) => {
        id !== null  ? 
       // console.log('update info')
        this.props.updateInfo({
            id: id,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })
        :
      //  console.log('add info');
        this.props.addInfo({
            id: Math.floor(Math.random() * 1000),
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
        this.setState({ firstName: '', lastName: '' });
    }

    render() {
        let {info} = this.props;
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={info.id !== null ? info.firstName : this.state.firstName} onChange={this.handleFirstNameChange} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={info.id !== null ? info.lastName : this.state.lastName} onChange={this.handleLastNameChange} /><br /><br />
                    {<input type="button" value={info.id !== null ? 'Update ': 'Submit'} onClick={() => this.handleSubmit(info.id)} />}
                </form>
            </>
        );

    }
}
export default FormComponent;