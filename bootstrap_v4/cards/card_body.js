import React,{Component} from "react";

class CardBody extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var bodyClass="card-body";
        bodyClass+= " ";
        bodyClass+= this.getClassExt(this.props.classExt);
        bodyClass = bodyClass.trim();
        return(
            <div className={bodyClass}>
                {this.props.children}
            </div>
        );
    }
}

export default CardBody;