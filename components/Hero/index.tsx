import {
  Button,
  Card,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  cardSection,
  hero,
  homeHeader,
  locationField,
  subText,
  location,
  businessbtn,
  cardSectionMobile,
} from "./hero";

export const Hero = ({ heroData }: any) => {
  const mobileMedia = useMediaQuery("(max-width:1024px)");

  const homeData = heroData?.PostHeader[0];

  return (
    <>
      <div className={hero}>
        <div className={mobileMedia ? cardSectionMobile : cardSection}>
          <div className={location}>
            <TextField
              className={locationField}
              name="location"
              fullWidth
              placeholder="Type delivery location"
            />
            <Button className={businessbtn} variant="contained">
              Show Buisness
            </Button>
          </div>
          <Typography
            justifyContent="center"
            textAlign="center"
            display="flex"
            variant="h3"
            fontWeight="600"
          >
            {homeData?.name}
          </Typography>
          <Typography
            textAlign="center"
            justifyContent="center"
            display="flex"
            variant="h6"
          >
            {homeData?.description}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Hero;
