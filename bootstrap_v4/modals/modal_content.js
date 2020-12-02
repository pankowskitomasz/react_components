import React,{Component} from "react";

class ModalContent extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var contentClass="modal-content";
        contentClass+= " ";
        contentClass+= this.getClassExt(this.props.classExt);
        contentClass = contentClass.trim();
        return(
            <div className={contentClass}>
                {this.props.children}
            </div>
        );
    }
}

export default ModalContent;