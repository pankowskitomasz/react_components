import React,{Component} from "react";

class Breadcrumb extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <ol className={"breadcrumb "+ext}>
                {this.props.children}
            </ol>
        );
    }
}

class Item extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <li className={"breadcrumb-item "+ext}>
                {this.props.children}
            </li>
        );
    }
}

Breadcrumb.Item = Item;
export default Breadcrumb;