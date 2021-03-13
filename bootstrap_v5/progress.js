import React,{Component} from "react";

class Progress extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"progress  "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Bar extends Component{
    render(){
        let type="";
        if(this.props.striped!==undefined){
            type+="progress-bar-striped ";
        }
        if(this.props.animated!==undefined){
            type+="progress-bar-animated ";
        }
        let position=0;
        if(this.props.position!==undefined
            && !isNaN(this.props.position)){
            position = this.props.position+"%"
        }
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"progress-bar "+type+" "+ext}
                style={{width: position}}>
                {this.props.children}
            </div>
        );
    }
}

Progress.Bar = Bar;
export default Progress;