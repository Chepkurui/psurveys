import React from "react";
import IntroView from '../../components/home/intro';
// import AboutView from '../../components/home/about';
import ServicesView from '../../components/home/services';
import RandomView from '../../components/home/random';
import GalleryView from '../../components/home/gallery';
import CarouselView from '../../components/home/carousel';
import FaqView from '../../components/home/faq';
import RandomerView from '../../components/home/randomer';
import ContactView from '../../components/home/contact';
import CreditsView from '../../components/home/credits';
// For styles
import "./css/home.css";

export default function HomeView(props) {
  return (
    <div className="root">
      {/*<h1>Home Page</h1>*/}
      <IntroView />
      {/* <AboutView /> */}
      <ServicesView />
      {/* <RandomView /> */}
      <GalleryView />
      {/* <CarouselView /> */}
      <FaqView />
      <RandomerView />
      <ContactView />
      <CreditsView />
    </div>
  );
}
