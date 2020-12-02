import React,{Component} from "react";
import PropTypes from "prop-types";
import {colorTypes} from "../commons/color_types";

class Alert extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    getDismiss(PropA){
        if(typeof(PropA)!=="undefined"){
            return "alert-dismissable";
        }
        return "";
    }
    getType(TypeA){
        if(typeof(TypeA)!=="undefined"
        && colorTypes.indexOf(TypeA)>=0){
            return "alert-"+TypeA;
        }
        return "";
    }
    render(){
        var alertClass="alert";
        alertClass+= " ";
        alertClass+= this.getType(this.props.type);
        alertClass+= " ";
        alertClass+= this.getDismiss(this.props.dismiss);
        alertClass+= " ";
        alertClass+= this.getClassExt(this.props.classExt);
        alertClass = alertClass.trim();
        return(
            <div className={alertClass}>
                {this.props.children}
            </div>
        );
    }
}

Alert.propTypes={
    type: PropTypes.string
};

export default Alert;