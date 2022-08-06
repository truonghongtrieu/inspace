import styles from './layout.module.css';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('*');

interface PhotoAttributes {
  src: string,
  width?: number,
  height?: number
}
export default function PhotoGallery({
  galleryPhotos
}: {
  children: React.ReactNode
  galleryPhotos?: PhotoAttributes[]
}) {
  const [carouselNumber, setCarouselNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // adds hooks
  const onImageHandleClick = (index: number) => {
    setOpenModal(true);
    if (carouselNumber >= 0 && carouselNumber < galleryPhotos.length) {
      setCarouselNumber(index);
    }
  };
  const onModalHandleClose = () => {
    setOpenModal(false);
  };
  const onModalHandlePrev = () => {
    if (carouselNumber > 0 && carouselNumber < galleryPhotos.length) {
      setCarouselNumber(carouselNumber - 1);
    }
  };
  const onModalHandleNext = () => {
    if (carouselNumber >= 0 && carouselNumber < galleryPhotos.length - 1) {
      setCarouselNumber(carouselNumber + 1);
    }
  };

  const checkKeyPress = (event: any) => {
    // http://gcctech.org/csc/javascript/javascript_keycodes.htm
    const { key, keyCode } = event;
    switch (keyCode) {
      case 37: //ArrowLeft
      case 91: //WindowLeft
        onModalHandlePrev();
        break;
      case 39: //ArrowRight
      case 92: //WindowRight
        onModalHandleNext();
        break;
      default:
    }
  }

  // registers keyboard events
  useEffect(() => {
    window.addEventListener('keydown', checkKeyPress);
    return () => {
      window.removeEventListener('keydown', checkKeyPress);
    }
  }, [carouselNumber]);


  return (
    <div className={styles.modalFullscreenWrap}>
      {openModal &&
        <Modal
          isOpen={openModal}
          onRequestClose={onModalHandleClose}
        >
          {galleryPhotos[carouselNumber] &&
            <div >
              <img className={styles.modalSingleImage}
                src={galleryPhotos[carouselNumber].src} alt="image caption" />
            </div>
          }

          <div className={styles.modalButtonsWrap}>
            <button onClick={onModalHandleClose}>Close</button>
            <button onClick={onModalHandlePrev} disabled={carouselNumber <= 0}>Prev</button>
            <button onClick={onModalHandleNext} disabled={carouselNumber >= galleryPhotos.length - 1}>Next</button>
          </div>
        </Modal>
      }

      {galleryPhotos && <div className={styles.galleryWrap}>
        {
          galleryPhotos.map((slide, index) => {
            return (
              <div className={styles.galleryWrapSingle} key={index}>
                <img
                  className={styles.galleryWrapSingleImg}
                  src={slide.src}
                  alt=""
                  onClick={() => onImageHandleClick(index)}
                />
              </div>
            )
          })
        }
      </div>
      }
    </div>
  )
}
