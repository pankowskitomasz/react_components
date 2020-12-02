import React,{Component} from "react";

class Modal extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var modalClass="modal";
        modalClass+= " ";
        modalClass+= this.getClassExt(this.props.classExt);
        modalClass = modalClass.trim();
        return(
            <div className={modalClass}>
                {this.props.children}
            </div>
        );
    }
}

export default Modal;