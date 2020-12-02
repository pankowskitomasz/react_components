import React,{Component} from "react";

class Toast extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var toastClass="toast";
        toastClass+= " ";
        toastClass+= this.getClassExt(this.props.classExt);
        toastClass = toastClass.trim();
        return(
            <div className={toastClass}>
                {this.props.children}
            </div>
        );
    }
}

export default Toast;