import React,{Component} from "react";
import PropTypes from "prop-types";

class Breadcrumb extends Component{
    render(){
        var content = this.props.list.map((item,index)=>{
            return <li key={index} className={(item.active===true)?"breadcrumb-item active":"breadcrumb-item"}>
                {(item.active===true)?item.name:<a href={item.link}>{item.name}</a>}
            </li>;
        }); 
        return(
            <ol className="breadcrumb">
                {content}
            </ol>
        );
    }
}
Breadcrumb.propTypes={
    list: PropTypes.arrayOf(PropTypes.object)
}

export default Breadcrumb;