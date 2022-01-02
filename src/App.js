import React, {Component} from "react";
import ImageSearch from "./ImageSearch/ImageSearch";
import ImageList from "./ImageList/ImageList";


const API_KEY = 'e52a287d86469bf01ea901dfd92cf8a5';

class App extends Component{
  state = {
    images : []
  }



  handleGetRequest = async(e)=>{
      e.preventDefault();
      const searchTerm = e.target.elements.searchValue.value;

      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${searchTerm}&media=photos&per_page=10000&page=1&format=json&nojsoncallback=1`;


      const request = await fetch(url)
      const response = await request.json();

      this.setState({images : response.photos.photo})
      console.log(searchTerm);
      console.log(this.state.images);

      // console.log(response);
  }

  // componentDidMount(){
  //   this.handleGetRequest();
  // }
  
  render(){
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest}/>
        <ImageList images={this.state.images}/> 
      </div>
    )
  }
}

export default App