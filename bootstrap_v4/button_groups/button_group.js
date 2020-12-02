import React,{Component} from "react";

class ButtonGroup extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    getType(PropA){
        if(typeof(PropA)!=="undefined"){
            return "btn-group-vertical";
        }
        return "";
    }
    render(){
        var groupClass="btn-group";
        groupClass+= " ";
        groupClass+= this.getType(this.props.vertical);
        groupClass+= " ";
        groupClass+= this.getClassExt(this.props.classExt);
        groupClass = groupClass.trim();
        return(
            <div class={groupClass}>
                {this.props.children}
            </div>
        );
    }
}

export default ButtonGroup;