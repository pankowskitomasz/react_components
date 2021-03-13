import React,{Component} from "react";
import colorTypes from "./color_types";

class Alert extends Component{
    render(){
        let type="";
        type=(colorTypes.indexOf(this.props.type)>=0)?"alert-"+this.props.type:"";
        type+=(this.props.dismiss!==undefined)?" alert-dismissable":"";
        type+=(this.props.ext!==undefined)?" "+this.props.ext:"";
        return(
            <div className={"alert "+type}>
            {this.props.children}
            </div>
        );
    }
}

class Heading extends Component{
    render(){
        let ext = (this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"alert-heading "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Link extends Component{
    render(){
        let href=(this.props.href!==undefined)?this.props.href:"#";
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        let dismiss=(this.props.dismiss!==undefined)?"alert":"";
        return(
            <a href={href} className={"alert-link "+ext} 
                data-bs-dismiss={dismiss}>
                {this.props.children}
            </a>
        );
    }
}

Alert.Heading = Heading;
Alert.Link = Link;
export default Alert;