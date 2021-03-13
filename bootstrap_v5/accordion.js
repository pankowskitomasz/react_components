import React,{Component} from "react";
import colorTypes from "./color_types";

class Accordion extends Component{
    render(){
        let type="";
        type+=(this.props.flush!==undefined)?" accordion-flush":"";
        type+=(this.props.ext!==undefined)?" "+this.props.ext:"";
        return(
            <div className={"accordion "+type}>
            {this.props.children}
            </div>
        );
    }
}

class Body extends Component{
    render(){
        let ext = (this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"accordion-body "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Button extends Component{
    render(){
        let ext = (this.props.collapsed!==undefined)?"collapsed ":""; 
        ext = (this.props.ext!==undefined)?this.props.ext:"";
        let target = (this.props.target!==undefined)?this.props.target:"";
        return(
            <button className={"accordion-button "+ext}
                type={"button"}
                data-bs-toggle={"collapse"}
                data-bs-target={target}>
                {this.props.children}
            </button>
        );
    }
}

class Collapse extends Component{
    render(){
        let ext = (this.props.ext!==undefined)?this.props.ext:"";
        let parent = (this.props.parent!==undefined)?this.props.parent:"";
        return(
            <div className={"accordion-collapse collapse "+ext}
                data-bs-parent={parent}>
                {this.props.children}
            </div>
        );
    }
}

class Header extends Component{
    render(){
        let ext = (this.props.ext!==undefined)?this.props.ext:"";
        return(
            <h2 className={"accordion-header "+ext}>
                {this.props.children}
            </h2>
        );
    }
}

class Item extends Component{
    render(){
        let ext = (this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"accordion-item "+ext}>
                {this.props.children}
            </div>
        );
    }
}

Accordion.Body = Body;
Accordion.Button = Button;
Accordion.Collapse = Collapse;
Accordion.Header = Header;
Accordion.Item = Item;
export default Accordion;