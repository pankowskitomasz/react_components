import React,{Component} from "react";

class Badge extends Component{
    render(){
        let ext=(this.props.pill!==undefined)?"rounded-pill ":"";
        ext+=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"badge "+ext}>
                {this.props.children}
            </div>
        );
    }
}

export default Badge;