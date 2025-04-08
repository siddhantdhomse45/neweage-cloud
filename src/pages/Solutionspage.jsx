import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import Solutionone from "../component/solutions/solutionone/Solutionone";
import Solutionhero from "../component/solutions/solutionhero/Solutionhero";
import Solutionthree from "../component/solutions/solutionthree/Solutionthree";

const Solutionspage = () => {
  return (
    <div>
      <Navbar />
      <Solutionhero/>
      <Solutionone />
      <Solutionthree/>
      <Footer />
    </div>
  );
};

export default Solutionspage;
