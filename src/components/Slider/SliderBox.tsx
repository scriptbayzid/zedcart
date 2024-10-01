// SliderBox.tsx
eslint-disable-next-line @typescript-eslint/ban-ts-comment
@ts-expect-error
import React from "react";
import Slider from "react-slick";
import Slides from "./Slides";

const SliderBox = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-2.png", // Ensure this image exists in your public folder
      title: "Trending Item",
      mainTitle: "Vegetables for Good",
      price: "$20",
    },
    // Add more slide data as needed
  ];

  return (
    <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slides
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderBox;
