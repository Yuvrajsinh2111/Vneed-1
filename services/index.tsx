import axios from "axios";

export const getLandingPageData = async () => {
  try {
    var config = {
      method: "post",
      url: "http://143.110.181.77:9044/site/landing/landingdata",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        Connection: "keep-alive",
        "Content-Length": "0",
        Cookie:
          "_ga=GA1.1.996028608.1671099854; _gid=GA1.1.1193542507.1671099854; searchLocation=^%^7B^%^7D; connect.sid=s^%^3Aojnm2J74pKUCuk-vTu1waIKqNyUfgjg1.7WznZRoCOdLk1Ngx6qdtTkwKQaO1ebQt7dqFeL7LZvI; lang=^%^7B^%^22lang^%^22^%^3A^%^22en^%^22^%^7D; io=4uDdtWkGGtko9DWZAAL3; _gat_gtag_UA_152424655_2=1; connect.sid=s%3A1k4NgngmuDouW7XPfkjW9YmRv5M6qCs7.dwSUSNAv7z3riYoCuIgYb6ciVrcUfYnpFMSPvYR9ISs",
        Origin: "http://143.110.181.77:9044"
      },
    };

    const response = (await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })) as any;

    return response.data.response;
  } catch {}
};
