import React,{Component} from "react";

class ButtonToolbar extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var toolbarClass="btn-toolbar";
        toolbarClass+= " ";
        toolbarClass+= this.getClassExt(this.props.classExt);
        toolbarClass = toolbarClass.trim();
        return(
            <div class={toolbarClass}>
                {this.props.children}
            </div>
        );
    }
}

export default ButtonToolbar;