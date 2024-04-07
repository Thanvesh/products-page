import React from "react";
import Filters from "./components/Filters";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Stories from "./stories/page";
import About from "./about/page";


const Home = () => {
  return (
    <main className="min-h-screen w-[90%] mx-auto">
      <Hero/>
      <Filters />
    </main>
  );
};

export default Home;
