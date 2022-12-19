import axios from "axios";

export const getLandingPageData = async () => {
  try {
    const responose = await axios.post(
      "http://143.110.181.77:9044/site/landing/landingdata"
    );
    return responose.data.response;
  } catch {}
};
