import React,{Component} from "react";

class CardHeader extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var headerClass="card-header";
        headerClass+= " ";
        headerClass+= this.getClassExt(this.props.classExt);
        headerClass = headerClass.trim();
        return(
            <div className={headerClass}>
                {this.props.children}
            </div>
        );
    }
}

export default CardHeader;