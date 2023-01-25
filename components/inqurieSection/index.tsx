import { Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { question } from "../question-section/question";
import YoutubeSection from "../youtube-section";
import { blockSection, youtubeSection } from "../youtube-section/yotube";
import { appimage, block, reachout, reachouttext } from "./inquire";

export const InquriesSection = () => {
  const mobileMedia = useMediaQuery("(max-width:768px)");

  // const data = inquriedata?.PostHeader[5];

  return (
    <>
      <div className={question}>
        <Container>
          <div className={mobileMedia ? blockSection : youtubeSection}>
            <div className={reachouttext}>
              <Typography variant="h4" fontWeight="600">
                Let Us Reach You Closer
              </Typography>
              <div>
                Satisfy your appetite with just a few taps on your phone’s
                screen and we make sure that your first bite lasts longer. Go
                for it and download our app Subscribe to our mailing list for
                specials offers and hot deals
              </div>
              <div className={mobileMedia ? block : reachout}>
                <a href="https://play.google.com/store/apps">
                  <img className={appimage} src="/images/play.png" />
                </a>
                <a href="https://www.apple.com/iphone/">
                  <img className={appimage} src="/images/appstore.png" />
                </a>
              </div>
            </div>
            <div>
              <img src="/images/1671039575748.png" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default InquriesSection;
