import { css } from "@emotion/css";

export const navSection = css({
  background: "black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const authSection = css({
  color: "white",
  display: "flex",
  marginRight: "20px",
  alignItems: "center",
});

export const select = css({
  color: "white",
});

export const appLogo = css({
  minHeight: "100px",
});

export const logo = css({
  top: "15px",
  left: "25px",
  position: "relative",
});

export const navItems = css({
  padding: "30px",
  color: "#ffff",
});

export const navItemsMob = css(navItems, {
  padding: "12px",
});

export const loginBtn = css({
  backgroundColor: "white",
  height: "35px",
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "white",
  },
});

export const lang = css({
  display: "flex",
  justifyContent: "center",
  background: "#393131",
  alignItems: "center",
  borderRadius: "10px",
  height: "40px",
});
