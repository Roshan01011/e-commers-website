import React from "react";
import Carousel from "react-material-ui-carousel";
import "./banner.css";

const images = [
  "https://previews.123rf.com/images/varijanta/varijanta1605/varijanta160500044/56755965-thin-line-flat-design-banner-for-sale-web-page-shopping-e-commerce-discounts-and-clearance-sale.jpg",
  "https://www.webnetcreatives.net/wp-content/uploads/2022/04/free-shipping-banner-pink.png",
  "https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg",
];

const Banner = () => {
  return (
    <Carousel
      className="carousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={false}
      cycleNavigation={true}
    >
      {images.map((img, i) => {
        return (
          <>
            <img src={img} alt="img" className="banner_img" />
          </>
        );
      })}
    </Carousel>
  );
};

export default Banner;
