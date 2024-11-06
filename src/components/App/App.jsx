import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  // const [feedbacks, setFeedbacks] = useState(() => {

  //   const saveFeedbacks = localStorage.getItem("saveFeedbacks");

  //   return (saveFeedbacks === null ? {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0
  //   } : JSON.parse(saveFeedbacks));

  // }
  // );

  // useEffect(() => {
  //   localStorage.setItem("saveFeedbacks",JSON.stringify(feedbacks));
  // }, [feedbacks]);

  // const updateFeedback = feedbackType => {
  //   setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  // };

  // const resetFeedback = () => {
  //   setFeedbacks({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });
  // };

  return (
    <>
      <SearchBar />
      <ImageGallery />
      <ImageModal />
      <ErrorMessage />
      <Loader />
      <LoadMoreBtn />

      {/* {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )} */}
    </>
  );
};

export default App;
