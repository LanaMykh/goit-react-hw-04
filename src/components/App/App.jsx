import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import { fetchImage } from '../../image-api.js';
import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const handleSearch = async (searchValue, page = 1) => {
    try {
      setError(false);
      setLoading(true);

      if (page === 1) {
        setGallery([]);
        setSearchValue(searchValue);
      }

      const data = await fetchImage(searchValue, page);
      const galleryCards = data.results;
      setTotalPages(data.total_pages);

      if (page > 1) {
        setGallery(prevCards => {
          return [...prevCards, ...galleryCards];
        });
      } else {
        setGallery(galleryCards);
      }

      setCurrentPage(page + 1);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = imageData => {
    setModalIsOpen(true);
    setDataModal(imageData);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage />}

      {gallery !== null && (
        <ImageGallery cards={gallery} openModal={openModal} />
      )}

      {gallery !== null && !loading && currentPage < totalPages && (
        <LoadMoreBtn
          onClick={handleSearch}
          page={currentPage}
          searchValue={searchValue}
        />
      )}

      {loading && <Loader />}

      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          modalIsClose={closeModal}
          dataModal={dataModal}
        />
      )}
    </>
  );
};

export default App;
