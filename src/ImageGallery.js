import React, { useState } from 'react'; 
import './ImageGallery.css';
import image1 from './images/art1.jpeg'; // Import your local images
import image2 from './images/art3.jpeg';
import image3 from './images/art4.jpeg';
import image4 from './images/art5.jpeg';
import image5 from './images/art6.jpeg';
import image6 from './images/art7.jpeg';  // You can add more if needed
import image7 from './images/art8.jpeg';
import image8 from './images/art9.jpeg';
import image9 from './images/art10.jpeg';
import image10 from './images/art11.jpeg';
import image11 from './images/art2.jpeg';
import image12 from './images/art12.jpg';


const ImageGallery = () => {
    const images = [
      { src: image1, alt: 'Art 1' },
      { src: image2, alt: 'Art 2' },
      { src: image3, alt: 'Art 3' },
      { src: image4, alt: 'Art 4' },
      { src: image5, alt: 'Art 5' },
      { src: image6, alt: 'Art 6' },
      { src: image7, alt: 'Art 7' },
      { src: image8, alt: 'Art 8' },
      { src: image9, alt: 'Art 9' },
      { src: image10, alt: 'Art 10' },
      { src: image11, alt: 'Art 11' },
      { src: image12, alt: 'Art 12' }

      
    ];
  
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (image) => {
      setSelectedImage(image);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
    };
  
    return (
      <div>
        <div id='gallery' className="gallery-container">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>
  
        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <span className="close">&times;</span>
            <img className="modal-content" src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        )}
      </div>
    );
};

export default ImageGallery;
