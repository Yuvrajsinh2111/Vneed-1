import {
  Button,
  Container,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { appimage, reachout } from "../inqurieSection/inquire";
import { navItemsData } from "../navbar/NavItems";
import {
  appLogo,
  block,
  company,
  copyright,
  footer,
  footerAppImage,
  footerlink,
  footerSection,
  mobcompany,
  Mobilesection,
  section,
  footerLinkSection,
} from "./footer";

export const Footer = () => {
  const label = navItemsData;
  const mobileMedia = useMediaQuery("(max-width:768px)");

  return (
    <>
      <div className={footer}>
        <Container>
          <div className={mobileMedia ? block : footerSection}>
            <div className={mobileMedia ? Mobilesection : section}>
              <div>
                <Typography color="white" variant="h5" fontWeight="600">
                  Get The App
                </Typography>
              </div>
              <div>
                <div className={mobileMedia ? block : appLogo}>
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
            <div className={mobileMedia ? Mobilesection : section}>
              <div>
                <Typography
                  variant="h5"
                  color="white"
                  fontWeight="600"
                  textAlign="left"
                >
                  About Us
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  color="white"
                  fontSize="15px"
                  fontWeight="400"
                  lineHeight="26px"
                  textAlign="left"
                >
                  Vneed have become an important part of the culture of France
                  as there are a lot of people dining at home compared to
                  restaurants as the country has a wide range of restaurants
                  including all types of grocery.
                </Typography>
              </div>
            </div>
          </div>
          <div className={mobileMedia ? mobcompany : company}>
            <div className={footerLinkSection}>
              <>
                {label.map(({ title, link }) => (
                  <a href={link} className={footerlink}>
                    {title}
                  </a>
                ))}
              </>
            </div>
          </div>
        </Container>
        <Divider />
        <Container>
          <div className={copyright}>Copyright ?? 2022 Vneed.</div>
          <div className={copyright}>TERMS AND CONDITION | PRIVACY POLICY</div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
