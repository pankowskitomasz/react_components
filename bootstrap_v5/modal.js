import React,{Component} from "react";

class Modal extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        let scrollable=(this.props.scrollable!==undefined)?"modal-dialog-scrollable":"";
        let centered=(this.props.centered!==undefined)?"moda-dialog-centered":"";
        return(
            <div className={"modal "+ext}>
                <div className={"modal-dialog "+centered+" "+scrollable}>
                    <div className={"modal-content"}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

class Header extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"modal-header "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Body extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"modal-body "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Footer extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"modal-footer "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Title extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <h5 className={"modal-title "+ext}>
                {this.props.children}
            </h5>
        );
    }
}

Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header= Header;
Modal.Title = Title;
export default Modal;