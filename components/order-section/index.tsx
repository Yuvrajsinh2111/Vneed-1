import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { Container } from "@mui/system";
import { log } from "console";
import { type } from "os";
import React from "react";
import { store } from "../store-section/store";
import { order, orderCard, orderImage, orderText } from "./orderSection";

const orderSectionData = [
  {
    img: "/images/bags.png",
    title: "Unlimited Order",
    desc: "Order food for a single person and also for group of persons",
  },
  {
    img: "/images/iphone.png",
    title: "Track Your Order Live ",
    desc: "Track your order all the way from the restaurant to your doorstep",
  },
  {
    img: "/images/manwithbox.png",
    title: "Super Fast Delivery ",
    desc: "Experience fast and fresh food delivery on-time to your doorstep",
  },
];

export const OrederSection = ({ orderData }: any) => {
  const data: any = orderData?.PostHeader?.filter(
    (item: any) => item.type === "appview"
  );

  return (
    <div className={order}>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          direction="row"
        >
          {data?.length > 0 &&
            data?.slice(0, 3).map(({ description, image, name }: any) => (
              <Grid xs={12} sm={6} md={4} lg={4}>
                <div className={orderCard}>
                  <Card sx={{ maxWidth: 345, minHeight: 300 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={"http://143.110.181.77:9044/" + image}
                        alt="green iguana"
                        className={orderImage}
                      />
                      <CardContent className={orderText}>
                        <Typography gutterBottom variant="h5" component="div">
                          {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default OrederSection;
