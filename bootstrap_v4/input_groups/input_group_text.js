import React,{Component} from "react";

class InputGroupText extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var inputClass="input-group-text";
        inputClass+= " ";
        inputClass+= this.getClassExt(this.props.classExt);
        inputClass = inputClass.trim();
        return(
            <span className={inputClass}>
                {this.props.children}
            </span>
        );
    }
}

export default InputGroupText;