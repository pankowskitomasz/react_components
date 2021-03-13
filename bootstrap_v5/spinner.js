import React,{Component} from "react";
import colorTypes from "./color_types";

class Spinner extends Component{
    render(){
        let type="";
        if(this.props.grow!==undefined){
            type+="spinner-grow";
        }
        else{
            type+="spinner-border";
        }
        if(colorTypes.indexOf(this.props.type)>=0){
            type+=" text-"+this.props.type;  
        }
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={type+" "+ext}>
                {this.props.children}
            </div>
        );
    }
}

export default Spinner;