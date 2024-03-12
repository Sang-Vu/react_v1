import React from "react";

class Demo extends React.Component{
student={id:'1001', name:'Nguyen Van'};
inputInfo={inputID:'',inputName:''};

changeValue = (event) => {
    this.setState({
        this.inputInfo
    });
}

inputInfoClick = () => {
this.student.id = this.inputInfo.id;
this.student.name = this.inputInfo.name;
};

render(){
    return(
<React.Fragment>
    <div>ID: <input type="text" id="inputID" onChange={this.changeValue} /> - Name: <input type="text" id="inputName" onChange={this.changeValue} /></div>
    <div className="id">ID: {this.student.id}</div>
    <div className="name">Name: {this.student.name}</div>
    <div><button onClick={this.inputInfoClick}>Click</button></div>
</React.Fragment>
    );
}
}
export default Demo;