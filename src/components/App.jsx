import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { fetchImages } from "api"
import { Loader } from  './Loader/Loader'
import { useState, useEffect } from "react"

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    if (query === '') return;    
    setLoading(true);
    fetchImages(query, page)
      .then(response => {
        setImages(prevImages => [...prevImages, ...response.hits]);
        setLoadMore(page < Math.ceil(response.totalHits / 12));
      })
      .catch(error => console.error("Error fetching images:", error))
      .finally(() => setLoading(false));
  }, [query, page])

   const handleSearchSubmit = query => {
    setQuery(query);
    setPage(1); 
    setImages([]); 
  };

  const   handleLoadMore = () => {
    setPage(prevState => prevState + 1);
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




