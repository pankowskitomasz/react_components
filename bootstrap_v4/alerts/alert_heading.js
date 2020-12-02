import React,{Component} from "react";

class AlertHeading extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var headingClass = "alert-heading";
        headingClass+= " ";
        headingClass+= this.getClassExt(this.props.classExt);
        headingClass = headingClass.trim();    
        return(
            <h4 className={headingClass}>
                {this.props.children}
            </h4>
        );
    }
}

export default AlertHeading;