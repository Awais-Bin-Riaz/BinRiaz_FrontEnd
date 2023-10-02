import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getProductPage } from '../../../actions'
import getParams from '../../../utils/getParams';
// var Carousel = require('react-responsive-carousel').Carousel;
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Card } from '../../../components/UI/Card';

/**
* @author
* @function ProductPage
**/

export const ProductPage = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;
    useEffect(() => {
        const params = getParams(props.location.search)
        console.log({ params })
        const payload = {
            params
        }
        dispatch(getProductPage(payload))
    }, [])

    return (
        <div style={{ margin: '5px 10px' }}>
            <h3>
                {page.title}
            </h3>
            <Carousel  >
                {
                    page.banners && page.banners.map((banner, index) =>
                        <div key={index} style={{ display: 'block' }}
                            href={banner.navigateTo}>
                            <img src={banner.img} alt='' />
                        </div>)
                }
            </Carousel>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '10px 0px' }}>
                {
                    page.products && page.products.map((product, index) =>
                        <Card key={index}
                            style={{
                                width: '400px',
                                height: '220px',
                                margin: '5px'
                            }}>
                            <img style={{
                                width: '100%', height: '100%  '
                            }} src={product.img} alt='' />

                        </Card>)
                }
            </div>
        </div>)

}