import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { log } from "console";
import { useState } from "react";
import { authSection, navSection, select } from "./nav";
import { navItemsData } from "./NavItems";

const Navbar = () => {
  const [selectedLan, setSelectedLan] = useState<string>("en");
  const handleChange = (e: any) => {
    setSelectedLan(e.target.value);
  };
  const mobileMedia = useMediaQuery("(max-width:1024px)");

  return mobileMedia ? (
    <nav className={navSection}>
      <Button sx={{ color: "#fff" }}>Login</Button>
    </nav>
  ) : (
    <nav className={navSection}>
      <img src="/images/VneedLogo.png" alt="logo" height="100" width="100" />
      <div>
        {navItemsData.map(({ title }) => (
          <Button sx={{ color: "#fff" }}>{title}</Button>
        ))}
      </div>
      <div className={authSection}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLan}
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
