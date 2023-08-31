import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import CarouselExample from "../components/carousel/Carousel";
import TitlebarImageList from "../components/sectionPhotos/Photos";

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
        <section id="photos">
        <TitlebarImageList/>
        </section>
      </main>
    </div>
  );
}

export default Home;
