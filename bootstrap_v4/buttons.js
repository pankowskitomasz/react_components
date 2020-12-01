import React,{Component} from "react";
import PropTypes from "prop-types";


var buttonTypes = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
    "link"
];

var buttonSizes = [
    "sm",
    "lg",
    "block"
];

class Button extends Component{
    getHref(ObjA){
        if(typeof(ObjA.props.href)!=="undefined"){
            return ObjA.props.href;
        }
        return "";
    }
    getState(ObjA){
        if(typeof(ObjA.props.active)!=="undefined"){
            return "active";
        }
        else if(typeof(ObjA.props.disabled)!=="undefined"){
            return "disabled";
        }
        else
            return "";
    }
    getSize(SizeA){
        if(typeof(SizeA)==="string"
        && buttonSizes.indexOf(SizeA)>=0){
            return ("btn-"+SizeA);
        }     
        return "";   
    }
    getType(ObjA){
        var res="btn-"; 
        if(typeof(ObjA.props.outline)!=="undefined"){
            res+="outline-";
        }
        if(typeof(ObjA.props.type)==="string"
        && buttonTypes.indexOf(ObjA.props.type)>=0){
            res+=ObjA.props.type;
        }     
        return (res==="btn-")?"":res;   
    }
    render(){
        var buttonClass = "btn";
        buttonClass+= " ";
        buttonClass+= this.getType(this);
        buttonClass+= " ";
        buttonClass+= this.getSize(this.props.size);
        buttonClass+= " ";
        buttonClass+= this.getState(this);
        buttonClass = buttonClass.trim(); 
        return(
            <a className={buttonClass} href={this.getHref(this)}>
                {this.props.children}
            </a>
        );
    }
}
Button.propTypes={
    size: PropTypes.string,
    type: PropTypes.string.isRequired
}

export default Button;