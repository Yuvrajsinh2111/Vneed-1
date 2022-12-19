export enum ROUTES {
  HOME = "/",
  ABOUT = "/about",
  SERVICES = "/services",
  CASESTUDY = "/casestudy",
  BLOGS = "/blogs",
  CAREER = "/career",
  CONTACT = "/contact",
  "PRIVACY POLICY" = "/privacy-policy",
  FAQ = "/faq",
  GDPR = "/gdpr",
}

type ternaryConditionsTypes = (
  condition: boolean,
  truthyClass: string,
  falsyClass: string,
  commonClass?: string
) => string;

export const ternaryConditions: ternaryConditionsTypes = (
  condition,
  truthyClass,
  falsyClass,
  commonClass
) => {
  if (commonClass)
    return `${commonClass} ${condition ? truthyClass : falsyClass}`;
  return `${condition ? truthyClass : falsyClass}`;
};
