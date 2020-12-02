import React,{Component} from "react";

class InputGroup extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var inputClass="input-group";
        inputClass+= " ";
        inputClass+= this.getClassExt(this.props.classExt);
        inputClass = inputClass.trim();
        return(
            <div className={inputClass}>
                {this.props.children}
            </div>
        );
    }
}

export default InputGroup;