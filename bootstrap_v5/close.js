import React,{Component} from "react";

class Close extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <button className={"btn-close "+ext}>
            </button>
        );
    }
}

export default Close;