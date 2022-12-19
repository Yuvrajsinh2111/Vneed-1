import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { cover, handscan, handscanMobile, qrtext } from "./qrscanner";

export const QrSection = () => {
  const mobileMedia = useMediaQuery("(max-width:1024px)");
  return (
    <>
      <div className={cover}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            // spacing={3}
            display="flex"
          >
            <Grid item xs={2} justifyContent="center" alignContent="center">
              <div>
                <img
                  className={mobileMedia ? handscanMobile : handscan}
                  src="images/hand-qr.png"
                />
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className={qrtext}>
                <Typography
                  variant="h4"
                  justifyContent="center"
                  textAlign="center"
                >
                  Get the full instacart experience
                </Typography>
              </div>
              <div className={qrtext}>
                <Typography
                  variant="h5"
                  textAlign="center"
                  justifyContent="center"
                >
                  Scan the QR code with your camera. First delivery is free.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={2} justifyContent="center" alignItems="center">
              <div>
                <img
                  className={mobileMedia ? handscanMobile : handscan}
                  src="images/qr-code.png"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      ;
    </>
  );
};

export default QrSection;
