import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { fetchImages } from "api"
import { Loader } from  './Loader/Loader'

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    loadMore: false,
  };

componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.query !== prevState.query) {
      const { query, page } = this.state;
      fetchImages(query, page).then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          loadMore: this.state.page < Math.ceil(response.totalHits / 12 ),
        }));
      })
      .catch(error => console.error('Error fetching images:', error))
      .finally(() => this.setState({ loading: false }));
  };
  };
  

  handleSearchSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
 
  
    
  render() {
    const { images, loading, loadMore  } = this.state;
    
    return (
      <div >
        <Searchbar onSubmit={this.handleSearchSubmit}/>
        {loading && <Loader />}
        <ImageGallery images={images} />
        {loadMore && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}




