import React,{Component} from "react";
import PropTypes from "prop-types";
import BreadcrumbItem from "./breadcrumb_item";

class Breadcrumb extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var breadcrumbClass="breadcrumb";
        breadcrumbClass+= " ";
        breadcrumbClass+= this.getClassExt(this.props.classExt);
        breadcrumbClass = breadcrumbClass.trim();
        var listContent= this.props.list.map((item,index)=>{
            return <BreadcrumbItem 
                href={item.href} 
                active={item.active} 
                name={item.name} 
                classExt={item.subClassExt}/>
        });       
        return(
            <ul className={breadcrumbClass}>
                {listContent}                
            </ul>
        );
    }
}

Breadcrumb.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
};

export default Breadcrumb;