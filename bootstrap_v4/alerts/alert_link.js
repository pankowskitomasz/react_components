import React,{Component} from "react";
import PropTypes from "prop-types";

class AlertLink extends Component{    
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var linkClass = "alert-link";
        linkClass+= " ";
        linkClass+= this.getClassExt(this.props.classExt);
        linkClass = linkClass.trim();
        return( 
            <a className={linkClass} 
                href={this.props.href} 
                data-dismiss={this.props.dismiss}>
                {this.props.children}
            </a>
        );
    }
}

export default AlertLink;