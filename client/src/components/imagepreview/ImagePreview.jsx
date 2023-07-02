import './ImagePreview.css'
import { useState } from 'react';
import ImageGalleryModal from './ImageGalleryModal';
const ImagePreview = ({ images }) => {
    const [openModal, setOpenModal] = useState(false);
    const items = [];
    images.forEach((element, index) => {
        if (index < 8)
            items.push(
                <div className="col-md-3" style={{ height: "12em" }}>
                    <img className='previewImg' src={element.src} alt="" onClick={(e) => {setOpenModal(true); }} />
                </div>
            );
    });
    return (
        <div>
            <div className='container p-3'>
                <div className='row g-1'>
                    {items}
                </div>
            </div>
            {openModal && <ImageGalleryModal setOpenModal={setOpenModal} images={images}/>}
        </div>
    )
}

export default ImagePreview;