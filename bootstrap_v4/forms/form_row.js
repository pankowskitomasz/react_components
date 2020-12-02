import React,{Component} from "react";

class FormRow extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var rowClass="form-row";
        rowClass+= " ";
        rowClass+= this.getClassExt(this.props.classExt);
        rowClass = rowClass.trim();
        return(
            <div className={rowClass}>
                {this.props.children}
            </div>
        );
    }
}

export default FormRow;