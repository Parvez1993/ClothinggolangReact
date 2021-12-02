import React from "react";
import Accessories from "../components/Accessories";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Category from "../components/Category";
import Featured from "../components/Featured";
import Info from "../components/Info";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <Category />

      <Services />
    </>
  );
}

export default Home;
