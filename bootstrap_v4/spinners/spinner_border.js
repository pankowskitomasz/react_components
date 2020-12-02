import React,{Component} from "react";
import {colorTypes} from "../commons/color_types";

class SpinnerBorder extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    getType(TypeA){
        if(typeof(TypeA)!=="undefined"
        && colorTypes.indexOf(TypeA)>=0){
            return "text-"+TypeA;
        }
        return "";
    }
    render(){
        var spinnerClass="spinner-border";
        spinnerClass+= " ";
        spinnerClass+= this.getType(this.props.type);
        spinnerClass+= " ";
        spinnerClass+= this.getClassExt(this.props.classExt);
        spinnerClass = spinnerClass.trim();
        return(
            <div className={spinnerClass}>
                {this.props.children}
            </div>
        );
    }
}

export default SpinnerBorder;