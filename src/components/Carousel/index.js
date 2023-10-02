// import React from 'react'
// // import "./style.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from "react-responsive-carousel"
// import img1 from "../../images/Galleryimg/G2.jpg"
// import img2 from "../../images/Galleryimg/G3.jpeg"

// /**
// * @author
// * @function Carousel
// **/

// export const Carouse = () => {
//     return (<>
//         <Carousel showThumbs={false} infiniteLoop autoPlay showStatus={false} showArrows={false} interval={8000} stopOnHover={false} emulateTouch={true} swipeable={true}>
//             <div>
//                 <img src={img1} alt='item1' />

//             </div>
//             <div>
//                 <img src={img2} alt='item2' />

//             </div>
//         </Carousel>
//     </>
//     )
// }






import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../images/Galleryimg/img1.png";
import img2 from "../../images/Galleryimg/img2.png";
import img3 from "../../images/Galleryimg/img3.png";
import img4 from "../../images/Galleryimg/img4.png";
import img5 from "../../images/Galleryimg/img5.png";
import './Carousel.css';
const images = [img1, img2, img3, img4, img5]; // Array of image paths

export const Carouse = () => {
  return (
    <>
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={true}
        showArrows={true}
        interval={8000}
        stopOnHover={false}
        emulateTouch={true}
        swipeable={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`item${index + 1}`} />
          </div>
        ))}
      </Carousel>
      </div>
    </>
  );
};

// export default CarouselComponent;
