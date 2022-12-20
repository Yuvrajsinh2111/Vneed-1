import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Container,
} from "@mui/material";
import React from "react";
import { accordian, panel, question } from "./question";

export const QuestionSection = () => {
  return (
    <>
      <div className={question}>
        <Container>
          <div>
            <Typography variant="h4">Common Questions</Typography>
          </div>
          <div className={accordian}>
            <Accordion
            //   expanded={expanded === "panel1"}
            //   onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography className={panel}>
                  How does Instacart delivery and curbside pickup work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Instacart makes it easy to order from your favorite stores.
                  Shop for items from stores near you, with a selection of more
                  than 500 retailers and trusted local grocers across North
                  America. Then, Instacart will connect you with a personal
                  shopper in your area to shop and deliver your order.
                  Contactless delivery is available with our “Leave at my door”
                  option.
                  <br />
                  <br />
                  You can track your orderʼs progress and communicate with your
                  shopper every step of the way using the Instacart app or
                  website.
                  <br />
                  <br />
                  Instacart also offers curbside pickup at select retail
                  locations. Simply place your order and choose a pickup time,
                  and a shopper will prepare your order at the store.{"/n"}
                  When you get to the store, use the Instacart app to notify us.
                  Depending on the store, a shopper or store employee will bring
                  the groceries to your car, or you can pick them up at the
                  designated area.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
            //   expanded={expanded === "panel2"}
            //   onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                className={panel}
              >
                <Typography>
                  How does Instacart delivery and curbside pickup work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
            //   expanded={expanded === "panel3"}
            //   onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                className={panel}
              >
                <Typography>
                  How does Instacart delivery and curbside pickup work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Container>
      </div>
    </>
  );
};

export default QuestionSection;
