import React,{Component} from "react";

class ToastBody extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var bodyClass="toast-body";
        bodyClass+= " ";
        bodyClass+= this.getClassExt(this.props.classExt);
        bodyClass = bodyClass.trim();
        return(
            <div className={bodyClass}>
                {this.props.children}
            </div>
        );
    }
}

export default ToastBody;