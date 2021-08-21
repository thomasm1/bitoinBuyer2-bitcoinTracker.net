
import React, { Component } from "react";  
import YTSearch from "youtube-api-search";
import SearchBar from "./video/search_bar";
import VideoList from "./video/video_list";
import VideoDetail from "./video/video_detail";
import VideoCSS from "./Video.css";
import _ from "lodash";

const API_KEY = "AIzaSyC6f1xCtTYvCAZvDYlHWhrpv620sy5x_xk";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("bitcoin");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div >
       <div style={VideoCSS} className="search" >
       <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
       </div>
      </div>
    );
  }
}

export default Video; 
