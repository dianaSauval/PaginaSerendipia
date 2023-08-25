import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";

function Home() {
  return (
    <div>        
      <header>
        <Header />
        <Banner/>
      </header>
      <main>
        <About/>
      </main>
    </div>
  );
}

export default Home;
