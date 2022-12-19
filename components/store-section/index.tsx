import { Box, Card, Container, Grid, Typography } from "@mui/material";
import {
  brandText,
  cardText,
  cirLogo,
  headingSec,
  store,
  storesec,
  str,
  vneedCard,
} from "./store";

const card = [
  {
    companyName: "Costco",
    type: "Groceries • Wholesale",
    method: "Delivery",
  },
  {
    companyName: "Costco",
    type: "Groceries • Wholesale",
    method: "Delivery",
  },
  {
    companyName: "Costco",
    type: "Groceries • Wholesale",
    method: "Delivery",
  },
  {
    companyName: "Costco",
    type: "Groceries • Wholesale",
    method: "Delivery",
  },
  {
    companyName: "Costco",
    type: "Groceries • Wholesale",
    method: "Delivery",
  },
  {
    companyName: "Costco",
    type: "Groceries • Wholesale",
    method: "Delivery",
  },
  {
    companyName: "Costco",
    type: "Groceries • Wholesale",
    method: "Delivery",
  },
  {
    companyName: "Costco",
    type: "Groceries • Wholesale",
    method: "Delivery",
  },
  {
    companyName: "Costco",
    type: "Groceries • Wholesale",
    method: "Delivery",
  },
];

export const StoreinArea = () => (
  <>
    <div className={store}>
      <div className={headingSec}>
        <Typography textAlign="center" variant="h4">
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
              {card.length > 0 &&
                card.map(({ companyName, type, method }) => (
                  <Grid
                    container
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    justifyContent="center"
                  >
                    <div className={vneedCard}>
                      <div className={cirLogo}>
                        <img src="/images/costco-store.png"></img>
                      </div>
                      <div className={cardText}>
                        <Typography variant="h6" className={brandText}>
                          {companyName}
                        </Typography>
                        <Typography>{type}</Typography>
                        <Typography>{method}</Typography>
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

export default StoreinArea;
