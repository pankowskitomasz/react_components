import React,{Component} from "react";
import PropTypes from "prop-types";


var textTypes =[
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark"
];

class Text extends Component{
    getType(TypeA){
        if(typeof(TypeA)==="string"
        && textTypes.indexOf(TypeA)>=0){
            return ("text-"+TypeA);
        }     
        return "";   
    }
    render(){
        var textClass = this.getType(this.props.type);
        return(
            <p className={textClass}>
                {this.props.children}
            </p>
        );
    }
}
Text.propTypes={
    type: PropTypes.string.isRequired
}

export default Text;