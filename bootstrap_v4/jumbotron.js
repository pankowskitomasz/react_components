import React,{Component} from "react";

class Jumbotron extends Component{
    render(){
        return(
            <div className={"jumbotron"}>
                {this.props.children}
            </div>
        );
    }
}

export default Jumbotron;