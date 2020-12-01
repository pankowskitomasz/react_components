import React,{Component} from "react";
import PropTypes from "prop-types";

var groupSizes = [
    "sm",
    "lg"
];

class ButtonGroup extends Component{    
    getSize(SizeA){
        if(typeof(SizeA)==="string"
        && groupSizes.indexOf(SizeA)>=0){
            return ("btn-group-"+SizeA);
        }     
        return "";   
    }
    getType(ObjA){
        if(typeof(ObjA.props.group)!=="undefined"){
            return "-group";
        }
        else if(typeof(ObjA.props.vertical)!=="undefined"){
            return "-group-vertical";
        }
        else if(typeof(ObjA.props.toolbar)!=="undefined"){
            return "-toolbar";
        }
        else
            return "";
    }
    render(){
        var groupClass = "btn";
        groupClass+= this.getType(this);
        groupClass+= " ";
        groupClass+= this.getSize(this.props.size);
        groupClass = groupClass.trim(); 
        return(
            <div className={groupClass}>
                {this.props.children}
            </div>
        );
    }
}
ButtonGroup.propTypes={
    size: PropTypes.string
}

export default ButtonGroup;