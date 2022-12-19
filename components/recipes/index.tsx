import { Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { store, storeCard } from "../store-section/store";
import { recipe, recipesCard, recipesImage, recipesText } from "./recipes";

const recipes = [
  {
    image: "/images/meat.png",
    desc: "Meat",
  },
  {
    image: "/images/2.png",
    desc: "Meat",
  },
  {
    image: "/images/3.png",
    desc: "Meat",
  },
  {
    image: "/images/4.png",
    desc: "Meat",
  },
];

export const Recipes = () => {
  return (
    <div className={recipe}>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {recipes.length > 0 &&
            recipes.map(({ image, desc }) => (
              <Grid
                xs={12}
                sm={6}
                md={3}
                lg={3}
                justifyContent="center"
                display="flex"
              >
                <div>
                  <div>
                    <img className={recipesImage} src={image} />
                  </div>
                  <div>
                    <Typography className={recipesText} variant="h6">
                      {desc}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Recipes;
