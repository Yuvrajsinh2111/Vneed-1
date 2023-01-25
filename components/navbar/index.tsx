import { Button, MenuItem, Select, useMediaQuery } from "@mui/material";
import { useState } from "react";
import {
  appLogo,
  authSection,
  loginBtn,
  logo,
  navItems,
  navItemsMob,
  navSection,
  select,
  lang,
} from "./nav";
import { navItemsData } from "./NavItems";

const Navbar = () => {
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const handleChange = (e: any) => {
    setSelectedLang(e.target.value);
  };
  const mobileMedia = useMediaQuery("(max-width:768px)");
  const navMobMedia = useMediaQuery("(max-width:1024px)");

  return mobileMedia ? (
    <nav className={navSection}>
      <Button sx={{ color: "#fff" }}>Login</Button>
    </nav>
  ) : (
    <nav className={navSection}>
      <div className={appLogo}>
        <img
          className={logo}
          src="/images/VneedLogo.png"
          alt="logo"
          height="60"
          width="60"
        />
      </div>

      <div>
        {navItemsData.map(({ title, link }) => (
          <a href={link} className={navMobMedia ? navItemsMob : navItems}>
            {title}
          </a>
        ))}
      </div>
      <div className={authSection}>
        <div className={lang}>
          <img
            src="	https://cdn.iconscout.com/icon/free/png-256/global-293-453260.png"
            width="25px"
            height="25px"
            color="#fff"
            alt="lang-icon"
            style={{ alignItems: "center" }}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedLang}
            label="language"
            onChange={handleChange}
            color="primary"
            className={select}
          >
            <MenuItem value={"en"}>EN</MenuItem>
            <MenuItem value={"fr"}>FR</MenuItem>
          </Select>
        </div>

        <Button sx={{ color: "#fff" }}>Sign Up</Button>
        <Button className={loginBtn} sx={{ color: "black" }}>
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
