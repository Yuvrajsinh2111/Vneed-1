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
  header,
  subheader,
} from "./hero";

export const Hero = () => {
  const mobileMedia = useMediaQuery("(max-width:768px)");

  // const homeData = heroData?.PostHeader[0];

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
            className={header}
          >
            Consider Your Grocery Cravings Delivered!
          </Typography>
          <Typography
            textAlign="center"
            justifyContent="center"
            display="flex"
            variant="h6"
            className={subheader}
          >
            Your Choice Of Grocery And Store, At Your Convenience Through The
            Tap Of Your Mobile Phone
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Hero;
