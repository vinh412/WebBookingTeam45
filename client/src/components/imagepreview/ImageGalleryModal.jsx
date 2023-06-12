import React from 'react'
import ImageGallery from 'react-image-gallery';
import './ImageGalleryModal.css'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function ImageGaleryModal({setOpenModal, images}) {
  const imagesArr = images.reduce((total, currentValue, currentIndex)=>{
    total.push({original: currentValue, thumbnail: currentValue});
    return total;
  }, []);
  return (
    <div className='modal-wrapper' onClick={(e) => {e.stopPropagation(); setOpenModal(false);}}>
        <div className='gallery-wrapper' onClick={(e)=>e.stopPropagation()}>
            <ImageGallery items={imagesArr} />
        </div>
    </div>
  );
}

export default ImageGaleryModal