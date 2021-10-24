import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import AboutMe from "parts/AboutMe";
import Project from "parts/Project";
import Footer from "parts/Footer";
import landingPage from "json/landingPage.json";
import "../assets/scss/style.scss";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refAboutMe = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.saya} />
        <AboutMe />
        <Project data={landingPage.project} />
        <Footer />
      </>
    );
  }
}
