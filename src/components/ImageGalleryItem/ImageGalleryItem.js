import css from './ImageGalleryItem.module.css';
import { WindowModal } from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt="foto"
        onClick={toggleModal}
        className={css.imageGalleryItemImage}
      />
      <WindowModal
        largeImageURL={largeImageURL}
        isModalOpen={isModalOpen}
        closeModal={toggleModal}
        tags={tags}
      />
    </li>
  );
};
