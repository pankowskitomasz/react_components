import React,{Component} from "react";

class BreadcrumbItem extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    getState(PropA){
        if(typeof(PropA)!=="undefined"){
            return "active";
        }
        return "";
    }
    getType(PropA){
        if(typeof(PropA)!=="undefined"){
            return <a href={this.props.href}>{this.props.name}</a>;
        }
        return this.props.name;
    }
    render(){
        var breadcrumbClass="breadcrumb-item";
        breadcrumbClass+= " ";
        breadcrumbClass+= this.getState(this.props.active);
        breadcrumbClass+= " ";
        breadcrumbClass+= this.getClassExt(this.props.classExt);
        breadcrumbClass = breadcrumbClass.trim();
        return(
            <li className={breadcrumbClass}>
                {this.getType(this.props.href)}
            </li>
        );
    }
}

export default BreadcrumbItem;