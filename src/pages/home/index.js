import React from "react";
import About from "../../components/about";
import Contact from "../../components/contact";
import Experience from "../../components/experience";
import FooterSocial from "../../components/footer-social";
import Header from "../../components/header";
import Mail from "../../components/mail";
import Project from "../../components/projects";
import SocialSection from "../../components/social-section";
import Welcome from "../../components/welcome";
import { styles } from "./index.css";

function Home() {
  const classes = styles();
  return (
    <div className={classes.rootContainer}>
      <Header />
      <div className={classes.socialSection}>
        <SocialSection />
      </div>
      <div className={classes.mailSection}>
        <Mail />
      </div>
      <div className={classes.mainSection}>
        <Welcome id="welcome" />
        <About id="about" />
        <Experience id="experience" />
        <Project id="project" />
        <Contact id="contact" />
      </div>
      <FooterSocial />
    </div>
  );
}

export default Home;
