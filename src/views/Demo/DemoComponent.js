import React from "react";
import FormComponent from "./FormComponent";
import ResultComponent from "./ResultComponent";


class Demo extends React.Component{
    state={
        info: {
            id: null,
            firstName: '',
            lastName: ''
        },
        infos:[{
            id: null,
            firstName: null,
            lastName: null
    }]    
    };
    

addInfo = (newInfo) => {
    let currentInfos = [...this.state.infos];
    currentInfos.push(newInfo);
    this.setState({infos : currentInfos});

}

editInfo = (info) => {
    this.setState({info: info});
}

updateInfo = (updatedInfo) => {
    let newInfos = this.state.infos.map((item) => item.id === updatedInfo.id ? updatedInfo  : item);
    this.setState({infos: newInfos, info: {id: null, firstName: null, lastName: null}});
    
}

deleteInfo = (id) => {
    let currentInfos = [...this.state.infos];
    let index = currentInfos.findIndex(item => item.id === id);

    if (index !== -1) {
        currentInfos.splice(index, 1);
    }
    this.setState({infos: currentInfos});
}
componentDidMount(){
  //  console.log('component did mount in DemoComponent');
}
componentDidUpdate(prevProps, prevState){
    console.log('component did update in DemoComponent ','prevProps: ',prevProps, ' prevState: ', prevState, 'current State', this.state);
}
render(){
    return(
<>

<FormComponent addInfo = {this.addInfo} updateInfo = {this.updateInfo} editInfo={this.editInfo} info={this.state.info} />
<ResultComponent infos = {this.state.infos} deleteInfo={this.deleteInfo} editInfo={this.editInfo} updateInfo = {this.updateInfo} />
</>
    );
}
}
export default Demo;