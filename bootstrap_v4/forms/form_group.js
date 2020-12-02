import React,{Component} from "react";

class FormGroup extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var groupClass="form-group";
        groupClass+= " ";
        groupClass+= this.getClassExt(this.props.classExt);
        groupClass = groupClass.trim();
        return(
            <div className={groupClass}>
                {this.props.children}
            </div>
        );
    }
}

export default FormGroup;