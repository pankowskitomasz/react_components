import React,{Component} from "react";

class Dropdown extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"dropdown "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Toggle extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <button className={"dropdown-toggle "+ext}
                data-bs-toggle="dropdown"
                type="button">
                {this.props.children}
            </button>
        );
    }
}

class Menu extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <ul className={"dropdown-menu "+ext}>
                {this.props.children}
            </ul>
        );
    }
}

class Item extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        let href=(this.props.href!==undefined)?this.props.href:"";
        return(
            <li>
                <a className={"dropdown-item "+ext}
                    href={href}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}

Dropdown.Item = Item;
Dropdown.Menu = Menu;
Dropdown.Toggle = Toggle;
export default Dropdown;