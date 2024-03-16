import React from "react";

class ResultComponent extends React.Component {
    state = {
        showInfo: false
    }

    handleShowHide = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }

    handleDelete = (id) => {
        this.props.deleteInfo(id);
    }

    handleEdit = (info) => {
        this.props.editInfo(info);
    }

    render() {
        let { infos } = this.props;
        return (
            <>
                {
                    infos.map((element, index) => {

                        return (element.id !== null ? (

                            <div key={element.id}>
                                {element.firstName}&nbsp; 
                                {element.lastName} 
                                <input type="button" value="Edit" onClick={() => this.handleEdit(element)} />
                                <input type="button" value="X" onClick={() => this.handleDelete(element.id)} />
                                </div>
                        ) 
                        : 
                        null
                        );
                    })
                }

            </>
        );

    }
}
export default ResultComponent;