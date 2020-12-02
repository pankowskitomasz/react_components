import React,{Component} from "react";

class ToastHeader extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var headerClass="toast-header";
        headerClass+= " ";
        headerClass+= this.getClassExt(this.props.classExt);
        headerClass = headerClass.trim();
        return(
            <div className={headerClass}>
                {this.props.children}
            </div>
        );
    }
}

export default ToastHeader;