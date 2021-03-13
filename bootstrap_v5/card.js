import React,{Component} from "react";

class Card extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"card "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Header extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"card-header "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Body extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"card-body "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Footer extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"card-footer "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Text extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <p className={"card-text "+ext}>
                {this.props.children}
            </p>
        );
    }
}

class Title extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <h5 className={"card-title "+ext}>
                {this.props.children}
            </h5>
        );
    }
}

class Subtitle extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <h6 className={"card-subtitle "+ext}>
                {this.props.children}
            </h6>
        );
    }
}

class Overlay extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <h6 className={"card-img-overlay "+ext}>
                {this.props.children}
            </h6>
        );
    }
}

class Img extends Component{
    render(){
        let type="card-img";
        if(this.props.top!==undefined){
            type+="-top";
        }
        let src=(this.props.src!==undefined)?this.props.src:"";
        let alt=(this.props.alt!==undefined)?this.props.alt:"";
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <img className={type+" "+ext}
                src={src}
                alt={alt}
            />
        );
    }
}

Card.Body = Body;
Card.Footer = Footer;
Card.Header = Header;
Card.Img = Img;
Card.Overlay = Overlay;
Card.Text = Text;
Card.Title = Title;
Card.Subtitle = Subtitle;
export default Card;