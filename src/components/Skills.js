import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "98.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>
                ♡ My Skills ♡
              </h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div style={{ width: 250 }} className="window">
                  <div className="title-bar">
                    <div className="title-bar-text">♡ Web Design ♡</div>
                    <div className="title-bar-controls">
                      <button aria-label="Minimize" />
                      <button aria-label="Maximize" />
                      <button aria-label="Close" />
                    </div>
                  </div>
                  <p>I find a lot of joy in creating aesthetically pleasing designs and I have an eye for detail, ensuring that every element comes together perfectly!</p>
                </div>

                <div style={{ width: 250 }} className="window">
                  <div className="title-bar">
                    <div className="title-bar-text">♡ Web Development ♡</div>
                    <div className="title-bar-controls">
                      <button aria-label="Minimize" />
                      <button aria-label="Maximize" />
                      <button aria-label="Close" />
                    </div>
                  </div>
                  <p>I love the technical part of coding and making the design come to life just as much as creating the design itself! I mostly use HTML, CSS, JS and React.js.</p>
                </div>

                <div style={{ width: 250 }} className="window">
                  <div className="title-bar">
                    <div className="title-bar-text">♡ Functional Programming ♡</div>
                    <div className="title-bar-controls">
                      <button aria-label="Minimize" />
                      <button aria-label="Maximize" />
                      <button aria-label="Close" />
                    </div>
                  </div>
                  <p>Haskell was my first programming language and it's one of my favourites so far. Functional programming is one of the most fascinating paradigms and one I'd like to explore even further.</p>
                </div>

                <div style={{ width: 250 }} className="window">
                  <div className="title-bar">
                    <div className="title-bar-text">♡ Other prog. languages ♡</div>
                    <div className="title-bar-controls">
                      <button aria-label="Minimize" />
                      <button aria-label="Maximize" />
                      <button aria-label="Close" />
                    </div>
                  </div>
                  <p>I've worked with C on several projects already and I'm currently dabbling on Java and Python!</p>
                </div>

                <div style={{width: 250}} className="window">
                            <div className="title-bar">
                                <div className="title-bar-text">♡ Writing ♡</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize"/>
                                    <button aria-label="Maximize"/>
                                    <button aria-label="Close"/>
                                </div>
                                </div>
                                <p>I've been writing ever since I was a child and it's one of my favourite hobbies. I've used my skills to write in several areas, including marketing & communications work.</p>
                            </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )

}