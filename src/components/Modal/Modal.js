import Modal from 'react-modal';
Modal.setAppElement('#root');

export const WindowModal = props => {
  const { isModalOpen, closeModal, largeImageURL, tags } = props;

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.3s ease-in-out',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: 'opacity 0.3s ease-in-out',
          },
        }}
      >
        <img src={largeImageURL} alt={tags} />
      </Modal>
    </div>
  );
};
