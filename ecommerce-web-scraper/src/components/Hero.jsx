import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import hero1 from '../assets/images/hero-1.svg';
import hero2 from '../assets/images/hero-2.svg';
import hero3 from '../assets/images/hero-3.svg';
import hero4 from '../assets/images/hero-4.svg';
import hero5 from '../assets/images/hero-5.svg';
import rightArrow from "../assets/icons/arrow-right.svg";
import './Hero.css';

const heroImages = [
  { imgUrl: hero1, alt: 'smartwatch' },
  { imgUrl: hero2, alt: 'bag' },
  { imgUrl: hero3, alt: 'lamp' },
  { imgUrl: hero4, alt: 'air fryer' },
  { imgUrl: hero5, alt: 'chair' },
];

const isValidAmazonProductURL = (url) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

const Searchbar = ({ setProduct }) => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) return alert('Please provide a valid Amazon link');

    try {
      setIsLoading(true);

      // Scrape the product page
      navigate(`/product?url=${encodeURIComponent(searchPrompt)}`);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12 form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter Product URL"
        className="searchbar-input"
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ''}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

const HeroCarousel = () => {
    return (
      <div className="hero-carousel">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showArrows={true}
          showStatus={false}
        >
          {heroImages.map((image) => (
            <img 
              src={image.imgUrl}
              alt={image.alt}
              width={484}
              height={484}
              className="object-contain"
              key={image.alt}
            />
          ))}
        </Carousel>
      </div>
    )
}

const HeroSection = () => {
  const [product, setProduct] = useState(null);

  return (
    <section className="px-6 md:px-20 py-24 hero-section">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 hero-section-cotainer">
          <div className="flex flex-col justify-center left-section"> 
          <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>
            <div className="flex flex-row">            
              <p className="small-text">
                Smart Shopping Starts Here:</p>
                <img 
                  src={rightArrow}
                  alt="arrow-right"
                  width={30}
                  height={20}
                  style={{marginTop: "-2px", marginLeft: "5px"}}
                />              
              </div>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>
  );
};

export default HeroSection;
