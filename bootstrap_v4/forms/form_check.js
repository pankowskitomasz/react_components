import React,{Component} from "react";

class FormCheck extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var checkClass="form-check";
        checkClass+= " ";
        checkClass+= this.getClassExt(this.props.classExt);
        checkClass = checkClass.trim();
        return(
            <div className={checkClass}>
                {this.props.children}
            </div>
        );
    }
}

export default FormCheck;