import React,{Component} from "react";

class Jumbotron extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var jumboClass="jumbotron";
        jumboClass+= " ";
        jumboClass+= this.getClassExt(this.props.classExt);
        jumboClass = jumboClass.trim();
        return(
            <div className={jumboClass}>
                {this.props.children}
            </div>
        );
    }
}

export default Jumbotron;