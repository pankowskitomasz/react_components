import React,{Component} from "react";

class ModalHeader extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var headerClass="modal-header";
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

export default ModalHeader;