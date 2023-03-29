import { useState } from "react";
import ProductCard from "./ProductCard";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/ProductList.css";

const ProductsList = ({ products, title }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <div className="product-list">
            <h2 style={{ textTransform: "capitalize" }}>{title}</h2>
            <div className="">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    
                    
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {products.map((item, i) => (
                        <ProductCard key={i} product={item} />
                    ))}
                </Carousel>
            </div>
            
        </div>
    );
};

export default ProductsList;
