import React,{Component} from "react";
import PropTypes from "prop-types";


var spinnerTypes =[
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

class Spinner extends Component{
    getShape(ObjA){
        if(typeof(ObjA.props.border)!=="undefined"){
            return "-border";
        }
        else if(typeof(ObjA.props.grow)!=="undefined"){
            return "-grow";
        }
        return "";
    }
    getType(TypeA){
        if(typeof(TypeA)==="string"
        && spinnerTypes.indexOf(TypeA)>=0){
            return ("text-"+TypeA);
        }     
        return "";   
    }
    render(){
        var spinnerClass = "spinner";
        spinnerClass+= this.getShape(this);
        spinnerClass+= " ";
        spinnerClass+= this.getType(this.props.type);
        return(
            <div className={spinnerClass}>
                <span class="sr-only">Loading...</span>
            </div>
        );
    }
}
Spinner.propTypes={
    type: PropTypes.string.isRequired
}

export default Spinner;