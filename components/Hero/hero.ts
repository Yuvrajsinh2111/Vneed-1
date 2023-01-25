import { css } from "@emotion/css";
import { width } from "@mui/system";

export const hero = css({
  background: "url(/images/hero-Image.jpeg) center",
  position: "relative",
  minHeight: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const cardSection = css({
  background: "white",
  width: "80%",
  alignItems: "center",
  padding: "35px",
});

export const cardSectionMobile = css(cardSection, {
  padding: "20px",
});

export const location = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center !important",
});

export const locationIcon = css({
  maxheight: "40px",
  width: "40px",
  border: "none",
  margin: "10px",
});

export const businessbtn = css({
  background: "black",
  height: "55px",
  margin: "1rem",
  "&:hover": {
    backgroundColor: "black",
  },
});

export const locationField = css({
  width: "600px",
  padding: "1rem",
});

export const header = css({
  marginTop: "50px",
});

export const subheader = css({
  marginTop: "-10px",
  color: "#585252",
});

export const firstHeader = css({
  display: "flex",
  justifyContent: "center",
  // width: "100px",
});

export const titleOne = css({
  color: "gray",
  textAlign: "center",
  display: "flex",
  fontSize: "38px",
  fontWeight: "600",
});

export const titleOneMob = css(titleOne, {
  fontSize: "30px",
});

export const titleTwo = css({
  paddingLeft: "10px",
  textAlign: "center",
  fontSize: "38px",
  fontWeight: "600",
});

export const titleTwoMob = css(titleTwo, {
  fontSize: "30px",
});

export const mobHeader = css({
  display: "block",
  justifyContent: "center",
});

export const inputFiled = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center !important",
  background: "#F0EDEC",
  width: "60%",
});

export const inputFiledMob = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center !important",
  background: "none",
  width: "60%",
});
