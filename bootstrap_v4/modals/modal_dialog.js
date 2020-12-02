import React,{Component} from "react";

class ModalDialog extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var dialogClass="modal-dialog";
        dialogClass+= " ";
        dialogClass+= this.getClassExt(this.props.classExt);
        dialogClass = dialogClass.trim();
        return(
            <div className={dialogClass}>
                {this.props.children}
            </div>
        );
    }
}

export default ModalDialog;