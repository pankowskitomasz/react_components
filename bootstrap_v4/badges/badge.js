import React,{Component} from "react";
import PropTypes from "prop-types";
import {colorTypes} from "../commons/color_types";

class Badge extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    getPill(PropA){
        if(typeof(PropA)!=="undefined"){
            return "badge-pill";
        }
        return "";
    }
    getType(TypeA){
        if(typeof(TypeA)!=="undefined"
        && colorTypes.indexOf(TypeA)>=0){
            return "badge-"+TypeA;
        }
        return "";
    }
    render(){
        var badgeClass="badge";
        badgeClass+= " ";
        badgeClass+= this.getType(this.props.type);
        badgeClass+= " ";
        badgeClass+= this.getPill(this.props.pill);
        badgeClass+= " ";
        badgeClass+= this.getClassExt(this.props.classExt);
        badgeClass = badgeClass.trim();
        return(
            <a className={badgeClass} href={this.props.href}>
                {this.props.children}
            </a>
        );
    }
}

export default Badge;