import React from "react";
import { toast } from 'react-toastify';


class FormComponent extends React.Component {
    state = {
        firstName: this.props.info.firstName,
        lastName: this.props.info.lastName,
    }

    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    }

    handleSubmit = () => {
        if (!this.state.firstName || !this.state.lastName) {
            toast.error("Value in boxes is invalid!");
            return;
        }
        if(this.props.info.id !== null)
        {
            this.props.updateInfo({
                id: this.props.info.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
            toast.success('Update item successfull');
        }else{
            this.props.addInfo({
                id: Math.floor(Math.random() * 1000),
                firstName: this.state.firstName,
                lastName: this.state.lastName
            });
            toast.success('Insert new item successfull');
        }
           
        this.setState({ firstName: '', lastName: '' });
    }
    componentDidMount() {
        //  console.log('component did mount in FormComponent');
    }
    componentDidUpdate(prevProps, prevState) {
        //   console.log('component did update in FromComponent ','prevProps: ',prevProps);
        //  return;
        if (prevProps.info.id !== this.props.info.id) {
            this.setState({
                firstName: this.props.info.firstName || '',
                lastName: this.props.info.lastName || ''
            });
        }

    }


    render() {
        let { info } = this.props;
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} /><br /><br />
                    {<input type="button" value={info.id !== null ? 'Update ' : 'Submit'} onClick={this.handleSubmit} />}
                </form>
            </>
        );

    }
}
export default FormComponent;


