import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectsPlaceholder from "../assets/img/projects-background.jpg";

export const Projects = () => {

    const projectsFrontEnd = [
        {
            title: "Personal portfolio (this one!)",
            description: "Responsive & aesthetically pleasing design using HTML, CSS, JavaScript, React.js & JSX.",
            imgUrl: projectsPlaceholder,
        },

        {
            title: "CeSIUM Around the World",
            description: "A website of snapshots recording CeSIUM's members' travels. At the time, I worked with HTML, CSS, Markdown, JS & React.js.",
            imgUrl: projectsPlaceholder,
            linkToProject: <a href="https://pelomundo.cesium.di.uminho.pt/">Click here to see!</a>,
        },
    ];

    const projectsHaskell = [
        {
            title: "Block-dude game",
            description: "A Block-dude style game developed in Haskell, using Gloss for the visual rendering.",
            imgUrl: projectsPlaceholder,
            linkToProject: <a href="https://github.com/AdrianaBot/Projeto-LI-I">Click here to see!</a>,
        },
    ];

    const projectsC = [
        {
            title: "Stack machine",
            description: "CLI for stack-based operations in C - one of my favourite projects so far!",
            imgUrl: projectsPlaceholder,
            linkToProject: <a href="https://github.com/AdrianaBot/Projeto-LI-II">Click here to see!</a>,
        },

        {
            title: "CLI for user querying",
            description: "This CLI allows users to perform simple queries efficiently, by filtering, sorting and associating entries, and displaying results in a clear, user-friendly format. Coded in C.",
            imgUrl: projectsPlaceholder,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>♡ My Projects ♡</h2>
                        <p>Here I have some of the projects I've made over the years. Although my area is front-end, I've also worked with other programming paradigms, with my favourite being the functional paradigm.
                            Currently, I'm more interested in both front-end & design, but I'm always willing to learn entirely new things and broaden my knowledge, as I love learning! ฅ՞•ﻌ•՞ฅ
                        </p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Front-end</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Haskell</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">C</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsFrontEnd.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsHaskell.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projectsC.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}