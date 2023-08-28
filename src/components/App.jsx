import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { fetchImages } from "api"
import { Loader } from  './Loader/Loader'
import { useEffect } from "react"

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  
  const  handleSearchSubmit = query => {
    setQuery({ query, page: 1, images: [] });
  };

  const   handleLoadMore = () => {
    setPage((prevState) => prevState.page + 1 );
  }; 
    
    return (
      <div >
        <Searchbar onSubmit={handleSearchSubmit}/>
        {loading && <Loader />}
        <ImageGallery images={images} />
        {loadMore && <Button onClick={handleLoadMore} />}
      </div>
    );
}




