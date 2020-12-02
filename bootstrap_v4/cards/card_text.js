import React,{Component} from "react";

class CardText extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var textClass="card-text";
        textClass+= " ";
        textClass+= this.getClassExt(this.props.classExt);
        textClass = textClass.trim();
        return(
            <p className={textClass}>
                {this.props.children}
            </p>
        );
    }
}

export default CardText;