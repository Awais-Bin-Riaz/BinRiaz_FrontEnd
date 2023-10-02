import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../../actions';
import { generatePublicUrl } from '../../../urlConfig';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/UI/Card';

export const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under250: 250,
    under1000: 1000,
    under2000: 2000,
    under3000: 3000,
    under4000: 4000,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        console.log(product.products[0]?.price);

        // Check if the array is not empty before rendering the card
        if (product.productsByPrice[key].length > 0) {
          return (
            <Card
              key={key} // Add a unique key for each card
              headerLeft={`${props.match.params.slug.split('-')[0]}  Under Rs. ${priceRange[key]}`}
              style={{ width: 'calc(100% - 40px)', margin: '20px' }}
            >
              <div className='cardHeader'></div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {product.productsByPrice[key].map((product) => (
                  <Link
                    key={product._id} // Add a unique key for each product
                    to={`/${product.slug}/${product._id}/p`}
                    style={{ display: 'block' }}
                    className='productContainer'
                  >
                    <div className='productImgContainer'>
                      <img src={generatePublicUrl(product.productPictures[0].img)} alt='' />
                    </div>
                    <div className='productInfo'>
                      <div style={{ margin: '5px 0' }}>{product.name}</div>
                      <div>
                        <span>4.7</span> &nbsp;
                        <span>3245</span>
                      </div>
                      <div className='productPrice'>{product.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          );
        } else {
          // Don't render the card if there are no products
          return null;
        }
      })}
    </>
  );
};
