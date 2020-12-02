import React,{Component} from "react"
import {colorTypes} from "../commons/color_types";
import {buttonSizes} from "../commons/button_sizes";

class Button extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    getOutline(PropA){
        if(typeof(PropA)!=="undefined"){
            return "btn-outline-";
        }
        return "btn-";
    }
    getSize(TypeA){
        if(typeof(TypeA)!=="undefined"
        && buttonSizes.indexOf(TypeA)>=0){
            return "btn-"+TypeA;
        }
        return "";
    }
    getType(TypeA){
        if(typeof(TypeA)!=="undefined"
        && colorTypes.indexOf(TypeA)>=0){
            return TypeA;
        }
        return "";
    }
    render(){
        var buttonClass="btn";
        buttonClass+= " ";
        buttonClass+= this.getOutline(this.props.outline);
        buttonClass+= this.getType(this.props.type);
        buttonClass = (buttonClass.substr(buttonClass.length-4,4)==="btn-")?buttonClass.substr(0,buttonClass.length-4):buttonClass;
        buttonClass = (buttonClass.substr(buttonClass.length-12,12)==="btn-outline-")?buttonClass.substr(0,buttonClass.length-12):buttonClass;
        buttonClass+= " ";
        buttonClass+= this.getSize(this.props.size);
        buttonClass+= " ";
        buttonClass+= this.getClassExt(this.props.classExt);
        buttonClass = buttonClass.trim();        
        return(
            <a className={buttonClass} href={this.props.href}>
                {this.props.children}
            </a>
        );
    }
}

export default Button;