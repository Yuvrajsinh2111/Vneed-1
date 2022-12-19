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
} from "./yotube";

export const YoutubeSection = () => {
  const mobileMedia = useMediaQuery("(max-width:1024px)");

  return (
    <>
      <div className={youtube}>
        <Container>
          <div className={mobileMedia ? blockSection : youtubeSection}>
            <div className="">
              <iframe
                width="520"
                height="360"
                src="https://www.youtube.com/embed/ZJKzmQBjJiA"
                title="Our Happy Client | Client Review Video | Success Sensation"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
              ></iframe>
            </div>
            <div className={aboutVneed}>
              <div>
                <Typography variant="h4" fontWeight="600">
                  About Vneed
                </Typography>
                <div>Grocery</div>
              </div>
              <div>
                <div className={reachout}>
                  <div>
                    <img className={footerAppImage} src="/images/play.png" />
                  </div>
                  <div>
                    <img
                      className={footerAppImage}
                      src="/images/appstore.png"
                    />
                  </div>
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