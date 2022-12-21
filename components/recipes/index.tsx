import { Typography, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import { Container } from "@mui/system";
import React from "react";
import { recipe, recipeImg, recipesImage, recipesText } from "./recipes";

const recipes = [
  {
    image: "/images/meat.png",
    desc: "Meat",
  },
  {
    image: "/images/2.png",
    desc: "Meat",
  },
  {
    image: "/images/3.png",
    desc: "Meat",
  },
  {
    image: "/images/4.png",
    desc: "Meat",
  },
  {
    image: "/images/meat.png",
    desc: "Meat",
  },
  {
    image: "/images/2.png",
    desc: "Meat",
  },
  {
    image: "/images/3.png",
    desc: "Meat",
  },
  {
    image: "/images/4.png",
    desc: "Meat",
  },
];

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Recipes = () => {
  return (
    // <div className={recipe}>
    <Container>
      <div className={recipe}>
        <Slider {...settings}>
          {recipes.length > 0 &&
            recipes.map(({ image, desc }) => (
              <div>
                <div className={recipeImg}>
                  <img className={recipesImage} src={image} />
                </div>
                <Typography
                  textAlign="center"
                  justifyContent="center"
                  className={recipesText}
                  variant="h6"
                >
                  {desc}
                </Typography>
              </div>
            ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Recipes;
