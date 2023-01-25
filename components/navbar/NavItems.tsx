import { ROUTES } from "../../utils/enum";

export interface NavItems {
  title: string;
  link: string;
}

export const navItemsData: NavItems[] = [
  // {
  //   title: "Home",
  // },
  {
    title: "About",
    link: "http://143.110.181.77:9044/page/aboutus",
  },
  {
    title: "Ride With Us",
    link: "http://143.110.181.77:9044/driver",
  },
  {
    title: "Partner With Us",
    link: "http://143.110.181.77:9044/restaurant",
  },
  {
    title: "Privacy Policy",
    link: "http://143.110.181.77:9044/page/terms-and-conditions",
  },

  {
    title: "Contact",
    link: "",
  },
];

export default NavItems;
