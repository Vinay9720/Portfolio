import React from "react";
import classes from "./Root.module.css";

import Header from "../Components/Header/Header";
import AboutMe from "./Header/HeaderBody/AboutMe";
import Skills from "./Main/Skills/Skills";
import ContactDetails from "./Main/ContactDetails/ContactDetails";
import Experience from "./Main/Experience/Experience";
import LeftNavbar from "./LeftNavbar/LeftNavbar";

const Root = () => {
  return (
    <>
      <Header />
      <LeftNavbar />
      <main className={classes.root}>
        <AboutMe />
        <Skills />
        <Experience />
        <ContactDetails />
      </main>
    </>
  );
};

export default Root;
