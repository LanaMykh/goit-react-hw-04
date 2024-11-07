import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ cards }) => {
  return (
    <ul className={styles.gallery}>
      {cards.map(card => (
        <li className={styles.galleryItem} key={card.id}>
          <ImageCard card={card} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
