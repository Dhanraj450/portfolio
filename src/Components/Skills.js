import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mater1 from "../assests/img/meter1.svg";
import mater2 from "../assests/img/meter2.svg";
import mater3 from "../assests/img/meter3.svg";
import colorSharp from "../assests/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="slill" id="slills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eum consequuntur dignissimos sequi debitis ipsa odit saepe animi, optio tempora voluptate, omnis repellat libero quidem praesentium alias laudantium magnam voluptas?</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={mater1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={mater2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={mater3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={mater1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
               
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" />
    </section>
  );
};
