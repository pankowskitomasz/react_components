import React,{Component} from "react";

class ModalFooter extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var footerClass="modal-footer";
        footerClass+= " ";
        footerClass+= this.getClassExt(this.props.classExt);
        footerClass = footerClass.trim();
        return(
            <div className={footerClass}>
                {this.props.children}
            </div>
        );
    }
}

export default ModalFooter;