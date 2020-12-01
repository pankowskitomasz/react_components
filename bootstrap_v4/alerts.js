import React,{Component} from "react";
import PropTypes from "prop-types";


var alertTypes =[
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

class Alert extends Component{
    getDismiss(ObjA){
        if(typeof(ObjA.props.dismiss)!=="undefined"){
            return "alert-dismissable";
        }
        return "";
    }
    getType(TypeA){
        if(typeof(TypeA)==="string"
        && alertTypes.indexOf(TypeA)>=0){
            return ("alert-"+TypeA);
        }   
        return "";     
    }
    render(){
        var alertClass = "alert";
        alertClass+=" ";
        alertClass+=this.getType(this.props.type);
        alertClass+=" ";
        alertClass+=this.getDismiss(this);
        alertClass = alertClass.trim();
        return(
            <div className={alertClass}>
                {this.props.children}
            </div>
        );
    }
}
Alert.propTypes={
    type: PropTypes.string.isRequired
}

export default Alert;