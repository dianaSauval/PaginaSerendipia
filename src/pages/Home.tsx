import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import CarouselExample from "../components/carousel/Carousel";
import TitlebarImageList from "../components/sectionPhotos/Photos";
import ContactSection from "../components/contact/contactSection";

function Home() {
  return (
    <div>        
      <header>
        <Header />
        <Banner/>
      </header>
      <main className="body">
        <section>
        <About/>
        </section>
        <section className="carousel">
        <CarouselExample/>
        </section>
        <section className="photos">
        <TitlebarImageList/>
        </section>
        <section className="contact">
          <ContactSection/>
        </section>
      </main>
    </div>
  );
}

export default Home;
