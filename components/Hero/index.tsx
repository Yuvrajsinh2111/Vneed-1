import { Button, Typography, useMediaQuery } from "@mui/material";

import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import {
  cardSection,
  hero,
  location,
  businessbtn,
  cardSectionMobile,
  subheader,
  locationIcon,
  firstHeader,
  titleOne,
  mobHeader,
  titleTwo,
  titleTwoMob,
  titleOneMob,
  inputFiled,
  inputFiledMob,
} from "./hero";

export const Hero = () => {
  const mobileHeader = useMediaQuery("(max-width:1024px)");
  const mobileMedia = useMediaQuery("(max-width:768px)");

  // const homeData = heroData?.PostHeader[0];

  return (
    <>
      <div className={hero}>
        <div className={mobileMedia ? cardSectionMobile : cardSection}>
          <div className={location}>
            <div className={mobileMedia ? inputFiledMob : inputFiled}>
              <ReactGoogleAutocomplete
                style={{
                  width: "600px",
                  padding: "1rem",
                  border: "none",
                  background: "#F0EDEC",
                  color: "black",
                }}
                apiKey={"AIzaSyAWVOnWoimw6ipE83KqJqDxuAwbvKuAurk"} //Got this key from Admin panel
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
              />
              <img
                className={locationIcon}
                src="/images/target.png"
                alt="location-icon"
              />
            </div>
            {!mobileMedia && (
              <Button className={businessbtn} variant="contained">
                Show Buisness
              </Button>
            )}
          </div>

          <div className={mobileMedia ? mobHeader : firstHeader}>
            <h1 className={mobileHeader ? titleOneMob : titleOne}>
              Consider Your Grocery
            </h1>
            <h1 className={mobileHeader ? titleTwoMob : titleTwo}>
              Cravings Delivered!
            </h1>
          </div>

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
