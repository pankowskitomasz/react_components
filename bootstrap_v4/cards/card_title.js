import React,{Component} from "react";

class CardTitle extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var titleClass="card-title";
        titleClass+= " ";
        titleClass+= this.getClassExt(this.props.classExt);
        titleClass = titleClass.trim();
        return(
            <h5 className={titleClass}>
                {this.props.children}
            </h5>
        );
    }
}

export default CardTitle;