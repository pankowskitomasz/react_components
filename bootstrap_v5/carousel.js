import React,{Component} from "react";

class Carousel extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        let id=(this.props.id!==undefined)?this.props.id:"";
        return(
            <div className={"carousel slide "+ext}
                data-bs-ride={"carousel"}
                id={id}>
                {this.props.children}
            </div>
        );
    }
}

class Button extends Component{
    render(){
        let active=(this.props.active!==undefined)?"active":"";
        let key=(this.props.key!==undefined)?this.props.key:0;
        let id=(this.props.id!==undefined)?this.props.id:"";
        return(
            <button type="button" 
                data-bs-target={id} 
                data-bs-slide-to={key} 
                className={active}>
            </button>
        );
    }
}

class Indicators extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"carousel-indicators "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Inner extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"carousel-inner "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Caption extends Component{
    render(){
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"carousel-caption "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Item extends Component{
    render(){
        let active=(this.props.active!==undefined)?"active":"";        
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <div className={"carousel-item "+active+" "+ext}>
                {this.props.children}
            </div>
        );
    }
}

class Control extends Component{
    render(){
        let type="";
        let slide="";
        let id=(this.props.id!==undefined)?this.props.id:"";        
        if(this.props.type==="prev"){
            type+="carousel-control-prev";
            slide="prev"
        }
        else{
            type+="carousel-control-next";
            slide="next";
        }
        let ext=(this.props.ext!==undefined)?this.props.ext:"";
        return(
            <button class={type} type="button" 
                data-bs-target={id}  
                data-bs-slide={slide}>
                <span class={type+"icon"}></span>
            </button>
        );
    }
}


Carousel.Button = Button;
Carousel.Caption = Caption;
Carousel.Control = Control;
Carousel.Indicators = Indicators;
Carousel.Inner = Inner;
Carousel.Item = Item;
export default Carousel;