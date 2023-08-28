import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ImageGalleryItem = (props) => {
  const { webformatURL, largeImageURL, tags } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  
const modalToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

 
 return (
      <li className={css.imageGalleryItem}>
        <img
          src={webformatURL}
          alt='foto'
          onClick={modalToggle}
          className={css.imageGalleryItemImage}
        />
 <Modal
          isOpen={isModalOpen}
          onRequestClose={modalToggle}
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
      </li>
    );
}


