import React,{Component} from "react";

class ButtonGroup extends Component{
    render(){
        let type=(this.props.vertical!==undefined)?"btn-group-vertical":"btn-group";
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={type+" "+ext}>
                {this.props.children}
            </div>
        );
    }
}

export default ButtonGroup;