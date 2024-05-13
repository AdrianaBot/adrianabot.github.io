import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../assets/img/lunaHeader.png";
import "98.css";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); 
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = [ "Hi! I'm Adriana. ♡", "Web Developer. ♡", "Web Designer. ♡"];
    const period = 2250;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.lenght - 1) : fullText.substring(0, text.length + 1); //typing motion

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } 
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> ♡ Welcome to my little corner of the Internet ♡</span>
                        <h1>{"♡ "}<span className="wrap">{text}</span></h1>
                        <div style={{ width: 500}} className="window">
                            <div className="title-bar">
                                <div className="title-bar-text">♡ About Me ♡</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize"/>
                                    <button aria-label="Maximize"/>
                                    <button aria-label="Close"/>
                                </div>
                                </div>
                            <div className="window-body">
                            <p style={{ textAlign: "center"}}> ˚ʚ♡ɞ˚ My love for all things cute and pretty, mixed with coding and science, has led me to front-end development! 
                            I take inspiration from some of my favourite things, like fashion, art, animation & technology to create pretty, but functional, websites.˚ʚ♡ɞ˚</p></div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="Luna image for home page" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}