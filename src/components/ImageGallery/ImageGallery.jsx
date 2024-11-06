import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ cards }) => {
  return (
    <ul className={styles.list}>
      {cards.map(card => (
        <li className={styles.card} key={card.id}>
          <ImageCard />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
