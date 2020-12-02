import React,{Component} from "react";

class ModalTitle extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var titleClass="modal-title";
        titleClass+= " ";
        titleClass+= this.getClassExt(this.props.classExt);
        titleClass = titleClass.trim();
        return(
            <h5 className={titleClass}>
                {this.props.children}
            </h5>
        );
    }
}

export default ModalTitle;