import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, modalIsClose, dataModal }) => {
  function afterOpenModal() {
    document.body.style.overflow = 'hidden';
  }

  function afterCloseModal() {
    document.body.style.overflow = 'auto';
  }

  function closeModal() {
    modalIsClose();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onAfterClose={afterCloseModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles.modalCard}>
          <img
            className={styles.modalImg}
            src={dataModal.urls.regular}
            alt={dataModal.alt_description}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
