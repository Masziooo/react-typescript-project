import React from "react";
import Navigation from "./components/molecules/Navigation/Navigation";
import Layout from "./components/templates/Layout/Layout";
import { NavElements } from "./components/molecules/Navigation/Navigation.models";
import Banner from "./components/molecules/Banner/Banner";
import { data as bannerData } from "./components/molecules/Banner/assets/Banner.data";
import Header from "./components/templates/Header/Header";
import AccordionList from "./components/molecules/AccordionList/AccordionList";
import { data as accordeonData } from "./components/molecules/AccordionList/assets/AccordionList.data";
import Testimonial from "./components/molecules/Testimonial/Testimonial";
import { data as TestimonialData } from "./components/molecules/Testimonial/assets/Testimonial.data";
import Blocks from "./components/molecules/Blocks/Blocks";
import { data as BlocksData } from "./components/molecules/Blocks/assets/Blocks.data";
import Footer from "./components/molecules/Footer/Footer";
import { data as FooterData } from "./components/molecules/Footer/assets/Footer.data";

function App() {
  return (
    <>
      <Header>
        <Navigation name={"Future one"} links={NavElements} />
      </Header>
      <Layout>
        <Banner data={bannerData} />
        <AccordionList accordions={accordeonData} />
        <Testimonial title={TestimonialData.title} />
        <Blocks blocks={BlocksData} />
      </Layout>
      <Footer footer={FooterData} />
    </>
  );
}

export default App;
