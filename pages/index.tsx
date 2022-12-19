import Hero from "../components/Hero";
import Layout from "../components/layout";
import StoreinArea from "../components/store-section";
import { OrederSection } from "../components/order-section";
import Recipes from "../components/recipes";
import QrSection from "../components/qrScanner-section";
import YoutubeSection from "../components/youtube-section";
import QuestionSection from "../components/accordion";
import InquriesSection from "../components/inqurieSection";
import { useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getLandingPageData } from "../services";
import Head from "next/head";

export default function Home() {
  const mobileMedia = useMediaQuery("(max-width:768px)");

  const [data, setData] = useState<any>();

  const getData = useCallback(async () => {
    try {
      const getAPIData = await getLandingPageData();
      setData(getAPIData[1]);
    } catch {
      //Error handling
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Layout>
        <Hero heroData={data} />
        <StoreinArea />
        <QrSection />
        <OrederSection orderData={data} />
        <Recipes />
        <YoutubeSection />
        <QuestionSection />
        <InquriesSection inquriedata={data} />
      </Layout>
    </>
  );
}
