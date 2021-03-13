import React,{Component} from "react";
import breakPoints from "./break_points";

class Navbar extends Component{
    render(){
        let expand=(breakPoints.indexOf(this.props.expand)>=0)?"navbar-expand-"+this.props.expand:"";
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        let type="";
        if(this.props.type!=="light"){
            type+="navbar-light";
        }
        else{
            type+="navbar-dark";
        }
        return(
            <nav className={"navbar "+expand+" "+type+" "+ext}>
                {this.props.children}
            </nav>
        );
    }
}

class Brand extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";        
        let href=(this.props.href!==undefined)?this.props.href:"";
        return(
            <a className={"navbar-brand "+ext}
                href={href}>
                {this.props.children}
            </a>
        );
    }
}

class Toggler extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        let target=(this.props.target!==undefined)?this.props.target:"";        
        return(
            <button className={"navbar-toggler "+ext}
                data-bs-toggle={"collapse"} 
                data-bs-target={target} 
                type={"button"}>
                <span className={"navbar-toggler-icon"}></span>
            </button>
        );
    }
}

class Collapse extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        let id=(this.props.target!==undefined)?this.props.id:"";        
        return(
            <div className={"collapse navbar-collapse "+ext} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}

class Nav extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <ul className={"navbar-nav "+ext}>
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
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        let href=(this.props.href!==undefined)?this.props.href:"";        
        return(
            <a className={"nav-link "+ext} href={href}>
                {this.props.children}
            </a>
        );
    }
}

Navbar.Brand = Brand;
Navbar.Collapse = Collapse;
Navbar.Item = Item;
Navbar.Link = Link;
Navbar.Nav = Nav;
Navbar.Toggler = Toggler;
export default Navbar;