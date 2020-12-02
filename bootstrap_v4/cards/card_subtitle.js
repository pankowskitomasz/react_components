import React,{Component} from "react";

class CardSubtitle extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var subtitleClass="card-subtitle";
        subtitleClass+= " ";
        subtitleClass+= this.getClassExt(this.props.classExt);
        subtitleClass = subtitleClass.trim();
        return(
            <h6 className={subtitleClass}>
                {this.props.children}
            </h6>
        );
    }
}

export default CardSubtitle;