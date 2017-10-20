import React,{Component} from 'react';
import ReactDOM from 'react-dom';


const VideoListItem= ({video,onVideoSelect}) => {
  //const video= props.video;
  const image=video.snippet.thumbnails.default.url;
  return (
    <li onClick={()=>onVideoSelect(video)}className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={image} className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;