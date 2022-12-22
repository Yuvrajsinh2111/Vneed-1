import { Container, Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getData } from "../../services";
import {
  cardText,
  cirLogo,
  headingSec,
  store,
  storesec,
  vneedCard,
} from "./store";

// const card = [
//   {
//     restaurantname: "Costco",
//     delivery_time: "Delivery",
//   },
// ];

export const StoreinArea = () => {
  // for API CALL

  const [data, setData] = useState<any>();

  const getStoreData = useCallback(async () => {
    try {
      const getStore = await getData();
      setData(getStore);
    } catch {
      //Error handling
    }
  }, []);

  useEffect(() => {
    getStoreData();
  }, [getStoreData]);

  // console.log("data", data?.data?.rest_list);

  const shops = data?.data?.rest_list;

  console.log("shops", shops);

  return (
    <>
      <div className={store}>
        <div className={headingSec}>
          <Typography textAlign="center" variant="h4" color="#585252">
            Choose your store in San Francisco Bay Area
          </Typography>
        </div>
        <div className={storesec}>
          <div>
            <Container>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {shops?.length > 0 &&
                  shops?.map(({ logo, restaurantname, delivery_time }: any) => (
                    <Grid
                      container
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      justifyContent="center"
                    >
                      <div className={vneedCard}>
                        <div>
                          <img
                            className={cirLogo}
                            src={"https://www.ssviandx.com/" + logo}
                          ></img>
                        </div>
                        <div className={cardText}>
                          <Typography
                            color="#585252"
                            fontSize="20px"
                            fontWeight="600"
                          >
                            {restaurantname}
                          </Typography>
                          <Typography color="#585252" fontSize="15px">
                            Groceries • Wholesale
                          </Typography>
                          <Typography fontSize="15px">
                            {delivery_time}
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreinArea;
