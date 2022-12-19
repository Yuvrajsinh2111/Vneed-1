import { Button, TextField, Typography, useMediaQuery } from "@mui/material";

import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import {
  cardSection,
  hero,
  locationField,
  location,
  businessbtn,
  cardSectionMobile,
} from "./hero";

export const Hero = ({ heroData }: any) => {
  const mobileMedia = useMediaQuery("(max-width:768px)");

  const homeData = heroData?.PostHeader[0];

  return (
    <>
      <div className={hero}>
        <div className={mobileMedia ? cardSectionMobile : cardSection}>
          <div className={location}>
            <ReactGoogleAutocomplete
              style={{ width: "600px", padding: "1rem" }}
              apiKey={"AIzaSyAWVOnWoimw6ipE83KqJqDxuAwbvKuAurk"} //Got this key from Admin panel
              onPlaceSelected={(place) => {
                console.log(place);
              }}
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
