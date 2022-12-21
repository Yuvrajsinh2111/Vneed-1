import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { order, orderCard, orderImage, orderText } from "./orderSection";

const orderSectionData = [
  {
    image: "/images/bags.png",
    name: "Unlimited Order",
    description: "Order food for a single person and also for group of persons",
  },
  {
    image: "/images/iphone.png",
    name: "Track Your Order Live ",
    description:
      "Track your order all the way from the restaurant to your doorstep",
  },
  {
    image: "/images/manwithbox.png",
    name: "Super Fast Delivery ",
    description:
      "Experience fast and fresh food delivery on-time to your doorstep",
  },
];

export const OrederSection = () => {
  // const data: any = orderData?.PostHeader?.filter(
  //   (item: any) => item.type === "appview"
  // );

  return (
    <div className={order}>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          direction="row"
        >
          {orderSectionData?.length > 0 &&
            orderSectionData.map(({ description, image, name }: any) => (
              <Grid xs={12} sm={6} md={4} lg={4}>
                <div className={orderCard}>
                  <Card sx={{ maxWidth: 345, minHeight: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={image}
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
