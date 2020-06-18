import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Alok Kumar Singh - Learn More About Me"
        {...this.props.auth}
      >
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read short description about me.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>
                  My name is Alok Kumar Singh and I am an experienced software
                  engineer
                </p>
                <p>
                  I have a Bachelor in Computer Science, Pursing Post Diploma in
                  Data Science and 8 years of experience working on a wide range
                  of technologies and projects in web applications in React,
                  Angular AngularJS, NodeJs and RoR.
                </p>
                <p>
                  Throughout my career, I have acquired advanced technical
                  knowledge and the ability to explain programming topics
                  clearly and in detail to a broad audience. I invite you to
                  contact me to discuss any opportunity
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
