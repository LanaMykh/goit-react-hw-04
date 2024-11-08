import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    width: '90vw', // Максимальна ширина — 90% ширини екрану
    height: '90vh', // Максимальна висота — 90% висоти екрану
    padding: '20px',
    // background: 'transparent',
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, closeModal, dataModal }) => {
  function afterOpenModal() {
    document.body.style.overflow = 'hidden';
  }

  function afterCloseModal() {
    document.body.style.overflow = 'auto';
  }

  function closeCard() {
    closeModal();
  }

  return (
    <div className={styles.modalBox}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onAfterClose={afterCloseModal}
        onRequestClose={closeCard}
        style={customStyles}
      >
        <div
          className={styles.modalCard}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%', // Займає всю висоту модального вікна
          }}
        >
          <img
            className={styles.modalImg}
            src={dataModal.urls.regular}
            alt={dataModal.alt_description}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain', // Масштабує зображення, зберігаючи пропорції
            }}
          />
          {dataModal && (
            <div className={styles.photoInfo}>
              <p className={styles.description}>
                <strong>{dataModal.description || 'No description'}</strong>
              </p>
              <ul className={styles.listInfo}>
                <li>
                  <p>
                    <strong>Autor:</strong> {dataModal.user.name}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Likes:</strong> {dataModal.likes}
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
