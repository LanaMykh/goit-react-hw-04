import styles from './ImageCard.module.css';

const ImageCard = ({ card }) => {
  return (
    <div>
      <img
        className={styles.card}
        src={card.urls.small}
        alt={card.alt_description}
      />
    </div>
  );
};

export default ImageCard;
