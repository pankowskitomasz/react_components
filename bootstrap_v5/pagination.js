import React,{Component} from "react";

class Pagination extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <ul className={"pagination "+ext}>
                {this.props.children}
            </ul>
        );
    }
}

class Item extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <li className={"page-item "+ext}>
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
            <a className={"page-link "+ext} href={href}>
                {this.props.children}
            </a>
        );
    }
}

Pagination.Item = Item;
Pagination.Link = Link;
export default Pagination;