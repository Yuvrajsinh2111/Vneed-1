import { Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { question } from "../accordion/question";
import YoutubeSection from "../youtube-section";
import { blockSection, youtubeSection } from "../youtube-section/yotube";
import { appimage, block, reachout, reachouttext } from "./inquire";

export const InquriesSection = ({ inquriedata }: any) => {
  const mobileMedia = useMediaQuery("(max-width:768px)");

  const data = inquriedata?.PostHeader[5];

  return (
    <>
      <div className={question}>
        <Container>
          <div className={mobileMedia ? blockSection : youtubeSection}>
            <div className={reachouttext}>
              <Typography variant="h4" fontWeight="600">
                {data?.title} {data?.name}
              </Typography>
              <div>{data?.description}</div>
              <div className={mobileMedia ? block : reachout}>
                <div>
                  <img className={appimage} src="/images/play.png" />
                </div>
                <div>
                  <img className={appimage} src="/images/appstore.png" />
                </div>
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
