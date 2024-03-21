import React from "react";
import '../../styles/result.scss'
import { toast } from 'react-toastify';

class ResultComponent extends React.Component {
    state = {
        editElementId: null,
        firstName: '',
        lastName: ''
    }

    handleFirstNameChange = (event) => {
        this.setState({firstName : event.target.value});
    }

    handleLastNameChange = (event) => {
        this.setState({lastName : event.target.value});
    }

    handleDelete = (id) => {
        this.props.deleteInfo(id);
        toast.success('Delete item successfull');
    }

    handleEdit = (info) => {
        this.props.editInfo(info);
    }

    handleEdit2 = (element) => {
        if (this.state.editElementId !== element.id) {
            this.setState({
                editElementId: element.id,
                firstName: element.firstName,
                lastName: element.lastName
            });
            return;
        }
        if (!this.state.firstName || !this.state.lastName) {
            toast.error("Value in boxes is invalid!");
            return;
        }
        this.props.updateInfo({
            id: this.state.editElementId,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
        this.setState({
            editElementId: null,
            firstName: '',
            lastName: ''
        });
        toast.success('Update item successfull');
    }

    componentDidMount() {
        //    console.log('component did mount in ResultComponent');
    }

    componentDidUpdate(prevProps, prevState) {
        //   console.log('component did update in ResultComponent ','prevProps: ',prevProps, ' prevState: ', prevState);
    }

    render() {
        let { infos } = this.props, needUpdate;

        return (
            !infos ?
                null
                :
                <>
                    {
                        infos.map((element, index) => {
                            if (element.id !== null) {
                                needUpdate = this.state.editElementId === element.id ? true : false;
                                return (
                                    <div key={element.id} className="list-element">
                                        First Name: <input type="text" className={needUpdate ? 'input-edit' : 'input-show'} value={needUpdate ? this.state.firstName : element.firstName} onChange={this.handleFirstNameChange} />
                                        Last Name: <input type="text" className={needUpdate ? 'input-edit' : 'input-show'} value={needUpdate ? this.state.lastName : element.lastName} onChange={this.handleLastNameChange} />
                                        <input type="button" value={needUpdate ? 'Update' : 'Edit'} onClick={() => this.handleEdit2(element)} />&nbsp;
                                        <input type="button" value="X" onClick={() => this.handleDelete(element.id)} />
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                </>
        );

    }
}
export default ResultComponent;