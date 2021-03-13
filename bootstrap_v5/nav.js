import React,{Component} from "react";

class Nav extends Component{
    render(){
        let type="";
        if(this.props.tabs!==undefined){
            type+="nav-tabs ";
        }
        else if(this.props.pills!==undefined){
            type+="nav-pills ";
        }
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <ul className={"nav "+ext}>
                {this.props.children}
            </ul>
        );
    }
}

class Item extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <li className={"nav-item "+ext}>
                {this.props.children}
            </li>
        );
    }
}

class Link extends Component{
    render(){
        let href=(this.props.href!==undefined)?this.props.href:"";
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <a className={"nav-link "+ext} href={href}>
                {this.props.children}
            </a>
        );
    }
}

Nav.Link = Link;
Nav.Item = Item;
export default Nav;