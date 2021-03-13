import React,{Component} from "react";
import colorTypes from "./color_types";

class ListGroup extends Component{
    render(){
        let type=(this.props.flush!==undefined)?"list-group-flush":"";
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <ul className={"list-group "+type+" "+ext}>
                {this.props.children}
            </ul>
        );
    }
}

class Item extends Component{
    render(){
        let type=(this.props.action!==undefined)?"list-group-item-action":"";
        if(colorTypes.indexOf(this.props.type)>=0){
            type+=" list-group-item-"+this.props.type;
        }
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <li className={"list-group-item "+type+" "+ext}>
                {this.props.children}
            </li>
        );
    }
}

ListGroup.Item = Item;
export default ListGroup;