import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import CarouselExample from "../components/carouselVideo/Carousel";
import TitlebarImageList from "../components/sectionPhotos/Photos";
import ContactSection from "../components/contact/contactSection";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>        
    <header>
        <Header />
        <Banner/>
      </header>
      <main className="body">
        <section id="about">
        <About/>
        </section>
        <section className="carousel" id="videos">
        <CarouselExample/>
        </section>
        <section className="photos" id="photos">
        <TitlebarImageList/>
        </section>
        <section className="contact">
          <ContactSection/>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;
