import React,{Component} from "react";

class Toast extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"toast "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Header extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"toast-header "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Body extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"toast-body "+ext}>
                {this.props.children}
            </div>
        );
    }
}

Toast.Body = Body;
Toast.Header = Header;
export default Toast;