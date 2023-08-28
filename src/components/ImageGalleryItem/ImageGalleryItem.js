import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  }

  modalToggle = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;

 return (
      <li className={css.imageGalleryItem}>
        <img
          src={webformatURL}
          alt='foto'
          onClick={this.modalToggle}
          className={css.imageGalleryItemImage}
        />
 <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.modalToggle}
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
}



//  оставлил код ниже для примера

    // return (
    //   <li className={css.imageGalleryItem}>
    //     <img
    //       src={webformatURL}
    //       alt="foto"
    //       onClick={this.modalToggle} 
    //       className={css.imageGalleryItemImage}
    //     />
    //     <Modal
    //       isOpen={this.state.isModalOpen}
    //       onRequestClose={this.modalToggle}
    //     >
    //       <div className={css.overlay} onClick={this.modalToggle}>
    //         <div className={css.modal}>
    //           <img onClick={() => onClick(largeImageURL)} src={largeImageURL} alt="foto" />
    //         </div>
    //       </div>
    //     </Modal>
    //   </li>
    // );
  
