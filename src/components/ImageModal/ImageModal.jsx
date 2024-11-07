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
  },
};

Modal.setAppElement('#yourAppElement');

const ImageModal = ({ modalIsOpen, modalIsClose, dataModal }) => {
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          <img
            className={styles.modalImage}
            src={dataModal.urls.regular}
            alt={dataModal.alt_description}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
