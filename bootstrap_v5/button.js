import React,{Component} from "react";
import colorTypes from "./color_types";

class Button extends Component{
    render(){
        let type="";
        if(this.props.outline!==undefined){
            type=(colorTypes.indexOf(this.props.type)>=0)?"btn-outline-"+this.props.type:"";
        }
        else{
            type=(colorTypes.indexOf(this.props.type)>=0)?"btn-"+this.props.type:"";
        }
        if(this.props.sm!==undefined){
            type+=" btn-sm";
        }
        else if(this.props.lg!==undefined){
            type+=" btn-lg";
        }
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <button type={"button"} className={"btn "+type+" "+ext}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;