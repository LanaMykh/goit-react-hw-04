import styles from './ImageCard.module.css';

const ImageCard = ({ card, openModal }) => {
  const onClickCard = () => {
    console.log('click');

    openModal(card);
  };

  return (
    <div>
      <img
        className={styles.card}
        src={card.urls.small}
        alt={card.alt_description}
        onClick={onClickCard}
      />
    </div>
  );
};

export default ImageCard;
