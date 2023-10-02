import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailsById } from '../../actions';
import { Layout } from '../../components/Layout';
import {
  IoIosStar,
} from 'react-icons/io';
import './style.css';
import { generatePublicUrl } from '../../urlConfig';
import { addToCart } from '../../actions';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Modal from 'react-modal';


/**
* @author
* @function ProductDetailsPage
**/

export const ProductDetailsPage = (props) => {
  // zoom Modal open
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomedImageUrl, setZoomedImageUrl] = useState('');

  const openModal = (imageUrl) => {
    setZoomedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // zoom Modal closed

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, []);

  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }

  return (
    <Layout>

      <div style={{ padding: "20px" }} className="container">
        <div>
          {/* <div className="col-12 col-md-6 col-lg-6 "> */}
          <div className="carousal-container">
            {/* Check if there are product pictures */}
            {product.productDetails.productPictures.length > 0 && (
              <div className="responsive-carousel-container">
                <Carousel
                  infiniteLoop
                  showStatus={false}
                  showArrows={false}
                  interval={10000}
                  showIndicators={false}
                  className="responsive-carousel"
                >
                  {product.productDetails.productPictures.map((picture, index) => (
                    <div key={index} onClick={() => openModal(generatePublicUrl(picture.img))}>
                      <img
                        src={generatePublicUrl(picture.img)}
                        alt={`item${index + 1}`}
                        className="responsive-image"
                        style={{ maxWidth: "60%", maxHeight: "90%" }}
                      />
                    </div>
                  ))}
                </Carousel>
                {/* Modal for zoomed image */}
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="Zoomed Image"
                >
                  <img width={"100%"} src={zoomedImageUrl} alt="" />
                </Modal>
              </div>
            )}
          </div>
        </div>



        {/* <div className="col-sm-12 col-md-6 col-lg-3"> */}
        <div>
          {/* product description */}
          <div className="productDetails">
          <p className="productTitle">{product.productDetails.name}</p>
          <p  style={{
                  fontSize: "1.2vmax",
                  color: "#878787",
                  fontWeight: "600",
                  marginTop:"-2vmax",
                  marginBottom:"2vmax"
                }}>{product.productDetails.parentCate}</p>
            {/* <div style={{ display: "inline-block" }}>
              <span className="ratingCount">
                4.3 <IoIosStar />
              </span>
              ;
              <span style={{ display: "flex" }} className="ratingNumbersReviews">
                72,234 Ratings & 8,140 Reviews
              </span>
            </div>
            <div className="extraOffer">
              Extra
              4500 off{" "}
            </div> */}
            <div className="flexRow priceContainer" >
              <span style={{ textDecorationLine: 'line-through' }} className="price">
                Rs.
                {product.productDetails.price+product.productDetails.price*product.productDetails.discount/100}
              </span>
              <span className="discount" style={{ margin: "0 10px" }}>
                {product.productDetails.discount} % off
              </span>
            </div>
            <span className="discountedPrice" style={{ verticalAlign: "center" }}>
              Now <span style={{ fontSize: "23px", fontWeight: "600" }}>
                Rs.                 {product.productDetails.price}
             </span>
              <span style={{ fontSize: "13px" }}> only </span>

            </span>



            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#878787",
                  fontWeight: "600",
                  marginTop:"1vmax"
                }}
              >
                Available Offers <br></br>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                    display: "inline-block"
                  }}
                >
                  {product.productDetails.offer}
                </span>
              </p>

              <p className='descript' style={{ display: "inline-block",  marginRight:"8vmax"}}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "14px",
                    color: "#878787",
                    fontWeight: "600",
                    
                  }}
                >
                  Description
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#212121",
                    display: "inline-block",
                    textAlign:"justify", 
                  }}
                >
                  {product.productDetails.description}
                </span>
              </p>
              {/* action buttons */}
              <div className="btns">
                <Button
                  style={{ backgroundColor: "#55A1A1", border: "none" }}
                  size="lg"
                  onClick={() => {
                    const { _id, name, price } = product.productDetails;
                    const img = product.productDetails.productPictures[0].img;
                    dispatch(addToCart({ _id, name, price, img }));
                  }}
                >
                  Add To Cart
                </Button>{" "}
                <Button
                  style={{ backgroundColor: "#fb641b", border: "none" }}
                  size="lg"
                  onClick={() => {
                    const { _id, name, price } = product.productDetails;
                    const img = product.productDetails.productPictures[0].img;
                    dispatch(addToCart({ _id, name, price, img }));
                    props.history.push(`/cart`);
                  }}
                >
                  Buy Now
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
};
