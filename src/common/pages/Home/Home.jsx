
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import JobListing from "../../components/JobListing/JobListing";

function Home() {
  return (
    <div>

      <Navbar /> 
      <Hero/>
      <JobListing/>

    </div>
  );
}

export default Home;
