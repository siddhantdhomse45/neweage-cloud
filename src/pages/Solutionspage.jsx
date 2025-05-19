import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import Solutionone from "../component/solutions/solutionone/Solutionone";
import Solutionhero from "../component/solutions/solutionhero/Solutionhero";
import Solutionthree from "../component/solutions/solutionthree/Solutionthree";
import MoreAddInSolutions from "../component/solutions/solutionhero/MoreAddInSolutions"

const Solutionspage = () => {
  return (
    <div>
      <Navbar />
      <Solutionhero/>
      <Solutionone />
      <Solutionthree/>
      <MoreAddInSolutions />
      <Footer />
    </div>
  );
};

export default Solutionspage;
