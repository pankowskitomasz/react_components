import React,{Component} from "react";

class Card extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var cardClass="card";
        cardClass+= " ";
        cardClass+= this.getClassExt(this.props.classExt);
        cardClass = cardClass.trim();
        return(
            <div className={cardClass}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;