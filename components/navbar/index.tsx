import { Button, MenuItem, Select, useMediaQuery } from "@mui/material";
import { useState } from "react";
import {
  appLogo,
  authSection,
  loginBtn,
  logo,
  navSection,
  select,
} from "./nav";
import { navItemsData } from "./NavItems";

const Navbar = () => {
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const handleChange = (e: any) => {
    setSelectedLang(e.target.value);
  };
  const mobileMedia = useMediaQuery("(max-width:768px)");

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
        {navItemsData.map(({ title }) => (
          <Button sx={{ color: "#fff", padding: "30px" }}>{title}</Button>
        ))}
      </div>
      <div className={authSection}>
        <img
          src="/images/lang-icon.png"
          width="10px"
          height="10px"
          color="#fff"
          alt="lang-icon"
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
        <Button sx={{ color: "#fff" }}>Sign Up</Button>
        <Button className={loginBtn} sx={{ color: "black" }}>
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
