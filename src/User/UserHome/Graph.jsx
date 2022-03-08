import React from 'react';
import GraphImg from '../../asset/image/Group 63 (1).png'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

export default function Graph() {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={{span:10, offset:1}} md={12}>
            <div className='graph'>

              <Image src={GraphImg} style={{ width: "100%" }} className='img-fluid' />
              <div class="centered">
                <p>Before we can track your scores we need<br/> to review your reports!</p>
                <Button style={{ background: "#14684e", border: "none" }} >ADD 3 BUREAU REPORT</Button>
              </div>
          
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
