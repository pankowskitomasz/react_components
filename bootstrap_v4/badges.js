import React,{Component} from "react";
import PropTypes from "prop-types";


var badgeTypes =[
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark"
];

class Badge extends Component{
    getPill(ObjA){
        if(typeof(ObjA.props.pill)!=="undefined"){
            return "badge-pill";
        }
        return "";
    }
    getType(TypeA){
        if(typeof(TypeA)==="string"
        && badgeTypes.indexOf(TypeA)>=0){
            return ("badge-"+TypeA);
        }     
        return "";   
    }
    render(){
        var badgeClass = "badge";
        badgeClass+= " ";
        badgeClass+= this.getType(this.props.type);
        badgeClass+= " ";
        badgeClass+= this.getPill(this);
        return(
            <div className={badgeClass}>
                {this.props.children}
            </div>
        );
    }
}
Badge.propTypes={
    type: PropTypes.string.isRequired
}

export default Badge;