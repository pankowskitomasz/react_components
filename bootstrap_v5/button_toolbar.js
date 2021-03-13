import React,{Component} from "react";

class ButtonToolbar extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"btn-toolbar "+ext}>
                {this.props.children}
            </div>
        );
    }
}

export default ButtonToolbar;