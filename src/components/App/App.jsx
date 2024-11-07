import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import { fetchImage } from '../../image-api.js';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async searchValue => {
    try {
      // console.log(searchValue);

      setError(false);
      setLoading(true);

      const data = await fetchImage(searchValue, 1);
      const galleryCards = data.results;

      setGallery(galleryCards);

      // console.log(galleryCards);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery cards={gallery} />
      {loading && <Loader />}
      {/* <LoadMoreBtn /> */}
      {/* <ImageModal /> */}
    </>
  );
};

export default App;
