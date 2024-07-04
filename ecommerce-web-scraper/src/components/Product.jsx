import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import './Product.css';
import PriceInfoCard from "../components/PriceInfoCard";
import redHeart from "../assets/icons/red-heart.svg";
import bookmark from "../assets/icons/bookmark.svg";
import share from "../assets/icons/share.svg";
import star from "../assets/icons/star.svg";
import comment from "../assets/icons/comment.svg";
import priceTag from "../assets/icons/price-tag.svg";
import chart from "../assets/icons/chart.svg";
import arrowUp from "../assets/icons/arrow-up.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import bag from "../assets/icons/bag.svg";

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);
  const query = new URLSearchParams(useLocation().search);
  const url = query.get('url');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product?url=${encodeURIComponent(url)}`);
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [url]);

  if (!productData) {
    return (
      <>
        <Navbar/>
        <p style={{marginTop: "10%", textAlign: "center"}}>Loading...</p>
      </>
    );
  }

  const formatNumber = (num = 0) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className=" grid lg:grid-cols-2 sm:grid-cols-1 gap-28">
        <div className="product-image">
            {/* Conditional rendering for carousel */}
            {productData.imageUrls && productData.imageUrls.length > 0 ? (
              <Carousel showArrows autoPlay infiniteLoop>
                {productData.imageUrls.map((imageUrl, index) => (
                  <div key={imageUrl}>
                    <img src={imageUrl} alt={`Product ${index + 1}`}/>
                  </div>
                ))}
              </Carousel>
            ) : (
              <p>No images available</p>
            )}
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
              <div className="flex flex-col gap-3">
                <p className="text-[28px] text-secondary font-semibold">
                  {productData.title}
                </p>

                <a
                  href={productData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-black opacity-50"
                >
                  Visit Product
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="product-hearts">
                  <img
                    src={redHeart}
                    alt="heart"
                    width={20}
                    height={20}
                    style={{marginLeft:"18px"}}
                  />
                  <p className="text-base font-semibold text-[#D46F77]">
                    {productData.reviewsCount}
                  </p>
                </div>

                <div className="p-2 bg-white-200 rounded-10">
                  <img
                    src={bookmark}
                    alt="bookmark"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="p-2 bg-white-200 rounded-10">
                  <img
                    src={share}
                    alt="share"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>

            <div className="product-info">
              <div className="flex flex-col gap-2">
                <p className="text-[34px] text-secondary font-bold">
                  {productData.currency} {formatNumber(productData.currentPrice)}
                </p>
                <p className="text-[21px] text-black opacity-50 line-through">
                  {productData.currency} {formatNumber(productData.originalPrice)}
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <div className="flex gap-3">
                  <div className="product-stars">
                    <img
                      src={star}
                      alt="star"
                      width={25}
                      height={25}
                    />
                    <p className="text-sm text-primary-orange font-semibold ml-2">
                      {productData.stars || '25'}
                    </p>
                  </div>

                  <div className="product-reviews">
                    <img
                      src={comment}
                      alt="comment"
                      width={25}
                      height={25}
                      className='ml-10'
                    />
                    <p className="text-sm text-secondary font-semibold ml-4">
                      {productData.reviewsCount} Reviews
                    </p>
                  </div>
                </div>

                <p className="text-sm text-black opacity-50">
                  <span className="text-primary-green font-semibold">93% </span> of
                  buyers have recommended this.
                </p>
              </div>
            </div>

            <div className="my-7 flex flex-col gap-5">
              <div className="flex gap-5 flex-wrap">
                <PriceInfoCard
                  title="Current Price"
                  iconSrc={priceTag}
                  value={`${productData.currency} ${formatNumber(productData.currentPrice)}`}
                />
                <PriceInfoCard
                  title="Average Price"
                  iconSrc={chart}
                  value={`${productData.currency} ${formatNumber(productData.originalPrice*2-productData.currentPrice*1.5)}`}
                />
                <PriceInfoCard
                  title="Highest Price"
                  iconSrc={arrowUp}
                  value={`${productData.currency} ${formatNumber(productData.originalPrice)}`}
                />
                <PriceInfoCard
                  title="Lowest Price"
                  iconSrc={arrowDown}
                  value={`${productData.currency} ${formatNumber(productData.originalPrice*2-productData.currentPrice*2)}`}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl text-secondary font-semibold">
              Product Description
            </h3>

            <div className="flex flex-col gap-4">
              {productData?.description?.split('\n').map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>

          <button className="btn w-fit mx-auto flex items-center justify-center gap-3 min-w-[200px]">
            <img
              src={bag}
              alt="check"
              width={22}
              height={22}
            />

            <a href={url} className="product-buy-button">
              Buy Now
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
