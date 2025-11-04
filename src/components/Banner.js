import {useState, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/cool-cat.png"

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);  // indicates which word is currently displayed
    const toRotate = ["Hi, I'm Kim"];
    const [text, setText] = useState('');   // indicates the portion of the word being displayed
    const [delta, setDelta] = useState(300 - Math.random() * 100);  // determines time passed between letters

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;  // we increase the index by 1 but only have two words so when loopNum equals 3, we mod it to get 1 again
        let fullText = toRotate[i];
        let updatedText = fullText.substring(0, text.length + 1);

        setText(updatedText);
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1 className="display-4 display-md-3 display-lg-1">{``}<span className="wrap" >{text}</span></h1>
                        <p>I am an aspiring software developer currently exploring frontend web development in React.</p>
                        <button onClick={() => window.open("https://github.com/kimm310")}>Check out my Github!<ArrowRightCircle size={25}/></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}