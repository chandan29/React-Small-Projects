import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyDUbniXLrABMsFosVtBQQkLRsMWVPRg--s';
import VideoDetail from './Components/video_detail';
import VideoList from './Components/video_list';
import SearchBar from './Components/search_bar';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo:null
    };

    this.searchVideo('cricket');
}


    searchVideo(term){
      YTSearch({key:API_KEY,term:term},(data) => {
        this.setState({
          videos:data,
          selectedVideo:data[0]
        });
      });
    }
  render(){
    return(
      <div>
        <SearchBar onSearchTermChange={term => this.searchVideo(term)}/>
      <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState(selectedVideo)} videos={this.state.videos} />
      </div>
    );
  }
}


ReactDOM.render(<App/>,document.querySelector('.container'))
