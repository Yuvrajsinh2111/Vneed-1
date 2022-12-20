import { Button, MenuItem, Select, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { appLogo, authSection, logo, navSection, select } from "./nav";
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
          height="65"
          width="80"
        />
      </div>

      <div>
        {navItemsData.map(({ title }) => (
          <Button sx={{ color: "#fff" }}>{title}</Button>
        ))}
      </div>
      <div className={authSection}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLang}
          label="language"
          onChange={handleChange}
          color="primary"
          className={select}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"fr"}>French</MenuItem>
        </Select>
        <Button sx={{ color: "#fff" }}>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
