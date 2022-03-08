import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {Zoom } from "react-awesome-reveal";

export default function CreditScore() {
    return (
        <>
            <section  style={{background:"rgb(247 247 247)" }} className='mt-2 pb-5'>
            <Container  >
                <Row>
                    <Col lg={12}  md={12} >
                      
                        <div className='creditscore_main'>
                            <h4 className='creditscore_heading' >Credit Score</h4>
                            <p className='creditscore_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem dicta fugit corrupti</p>
                        </div>
                     
                    </Col>
                </Row>
              
                <Row  >
                    <Col lg={4}  md={4} sm={12} >
                        <Card className="creditscore_card">
                            <Card.Body className='cardcontanier'>
                                <Card.Title> <div className='credirscore_card_count'>1</div> </Card.Title>
                                <Card.Title style={{color:"#07543c"}}>Lorem ipsum dolor sit amet consectetur </Card.Title>
                                <Card.Text className='card_text' >
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet veniam quo ducimus
                                    debitis consectetur vel in porro officiis corrupti sed molestiae maxime id, excepturi architecto optio
                                    sit alias tenetur!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}  md={4} sm={12}>
                        <Card className="creditscore_card" >
                            <Card.Body className='cardcontanier'>
                                <Card.Title> <div className='credirscore_card_count'>2</div> </Card.Title>
                                <Card.Title style={{color:"#07543c"}}>Lorem ipsum dolor sit amet consectetur </Card.Title>
                                <Card.Text  className='card_text'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet veniam quo ducimus
                                    debitis consectetur vel in porro officiis corrupti sed molestiae maxime id, excepturi architecto optio
                                    sit alias tenetur!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}   md={4} sm={12}>
                        <Card className="creditscore_card" >
                            <Card.Body className='cardcontanier'>
                                <Card.Title> <div className='credirscore_card_count'>3</div> </Card.Title>
                                <Card.Title style={{color:"#07543c"}}>Lorem ipsum dolor sit amet consectetur </Card.Title>
                                <Card.Text  className='card_text'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet veniam quo ducimus
                                    debitis consectetur vel in porro officiis corrupti sed molestiae maxime id, excepturi architecto optio
                                    sit alias tenetur!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            
               

            </Container>

            </section>
           
        </>
    )

}
