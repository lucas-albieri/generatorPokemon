
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import IndexHeader from "components/Headers/IndexHeader.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";

// index sections
import SortPokemon from "views/index-sections/SortPokemon.jsx";


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SortPokemon />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
