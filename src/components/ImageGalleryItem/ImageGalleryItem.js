import css from './ImageGalleryItem.module.css';
import { WindowModal } from 'components/Modal/Modal';

export const ImageGalleryItem = props => {
  const { webformatURL, closeModal } = props;

  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt="foto"
        onClick={closeModal}
        className={css.imageGalleryItemImage}
      />
      <WindowModal />
    </li>
  );
};

// const [isModalOpen, setIsModalOpen] = useState(false);
// const modalToggle = () => {
//   setIsModalOpen(prevState => !prevState);
// };
