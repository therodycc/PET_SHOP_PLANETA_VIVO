"use client";
import { useEffect } from "react";
import { Header } from "../layout/header/header";
import { Footer } from "./home/footer";
import { Mvv } from "./home/mvv/mvv";
import { NetworkSection } from "./home/network/network";
import { OurServices } from "./home/our-services";
import { LoadingPage } from "./loading";

export const HomeIndex = () => {
  return (
    <LoadingPage>
      <>
        <Header />
        <OurServices />
        <Mvv />
        <NetworkSection />
        <Footer />
      </>
    </LoadingPage>
  );
};
