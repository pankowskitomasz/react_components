import React,{Component} from "react";

class MediaBody extends Component{
    getClassExt(PropA){
        if(typeof(PropA)!=="undefined"){
            return PropA;
        }
        return "";
    }
    render(){
        var mediaClass="media-body";
        mediaClass+= " ";
        mediaClass+= this.getClassExt(this.props.classExt);
        mediaClass = mediaClass.trim();
        return(
            <div className={mediaClass}>
                {this.props.children}
            </div>
        );
    }
}

export default MediaBody;