import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, page, searchValue }) => {
  const handleLoadMore = () => {
    onClick(searchValue, page);
  };

  return (
    <button
      className={styles.btnLoadMore}
      onClick={handleLoadMore}
      type="button"
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
