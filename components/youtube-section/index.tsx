import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { footerAppImage } from "../footer/footer";
import { reachout } from "../inqurieSection/inquire";
import recipes from "../recipes";
import { recipe, recipesImage, recipesText } from "../recipes/recipes";
import {
  aboutVneed,
  blockSection,
  video,
  youtube,
  youtubeSection,
  yvideo,
} from "./yotube";

export const YoutubeSection = () => {
  const mobileMedia = useMediaQuery("(max-width:768px)");

  return (
    <>
      <div className={youtube}>
        <Container>
          <div className={mobileMedia ? blockSection : youtubeSection}>
            {mobileMedia ? (
              <div className={yvideo}>
                <iframe
                  width="200"
                  height="360"
                  src="https://www.youtube.com/embed/ZJKzmQBjJiA"
                  title="Our Happy Client | Client Review Video | Success Sensation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            ) : (
              <div>
                <iframe
                  width="520"
                  height="360"
                  src="https://www.youtube.com/embed/ZJKzmQBjJiA"
                  title="Our Happy Client | Client Review Video | Success Sensation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            )}

            <div className={aboutVneed}>
              <div>
                <Typography variant="h4" fontWeight="600">
                  About Vneed
                </Typography>
                <div>Grocery</div>
              </div>
              <div>
                <div className={reachout}>
                  <a href="https://play.google.com/store/apps">
                    <img className={footerAppImage} src="/images/play.png" />
                  </a>
                  <a href="https://www.apple.com/iphone/">
                    <img
                      className={footerAppImage}
                      src="/images/appstore.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default YoutubeSection;
