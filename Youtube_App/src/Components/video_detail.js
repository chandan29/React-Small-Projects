import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const VideoDetail= (props) =>{
  if(!props.video){
    return <div>Loading....</div>;
  }
  const videoId=props.video.id.videoId;
  const url='https://www.youtube.com/embed/'+videoId;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};
/*
class VideoDetail extends Component {
  const videoId=this.props.video.id.videoId;
  const url='https://www.youtube.com/embed/'+videoId;
  render(){
    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{this.props.video.snippet.title}</div>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}
*/
export default VideoDetail;
