import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaCheckCircle } from 'react-icons/fa';



export default function Subscription() {
   


  return (
    <> 
    <section   style={{ background: "#d3d3d252" }} className='p-3 pb-5'>
    <Container >
        <Row>
          <Col lg={12} md={12}>
            <div className='pricing_sec2_header mt-3'>
              <h3>Don’t have an account? Select one from below. No contract. Cancel anytime.</h3>
            </div>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col lg={6} md={6} >
            <div className='basiccard'> 
            <div className='pricing_plan' >
              <h5>Smartcredit  BASIC</h5>
              <hr></hr>
              <div className='subprice'>
              <p className='price'> $88 /mo</p>
              <p className='cancleText'>CANCEL ANY TIME</p>
              </div>
              <hr></hr>
              <ul className='ml-15'>
                <li><FaCheckCircle className='checkicon'/>Unlimited Credit Sensei Disutes</li>
                <li> <FaCheckCircle  className='checkicon'/>Monthlt 3 Bureaos Reports & Scores</li>
              </ul>
              <h5>Smartcredit</h5>
              <ul className='ml-24'>
                <li> <FaCheckCircle  className='checkicon'/>Identity Theft Insurance ($1m)</li>
                <li><FaCheckCircle  className='checkicon'/>Credit Monitoring & Alerts (TU)</li>
              </ul>
              <p className='text-center cardtext'>Includes SmartCredit Money Manager with 2 monthly Transunion Report &  Score updates in SmartCredit.</p>
            </div>
            </div>
          
          </Col>

        
        
          <Col lg={6} md={6}>
          <div className='basicprimimum'> 
            <div className='pricing_plan' >
              <h5>Smartcredit  PREMIUM</h5>
              <hr></hr>
              <div className='subprice'>
              <p className='price'> $99 /mo</p>
              <p className='cancleText'>CANCEL ANY TIME</p>
              </div>
              <hr></hr>
              <ul className='ml-15'>
                <li><FaCheckCircle className='checkicon'/>Unlimited Credit Sensei Disutes</li>
                <li> <FaCheckCircle  className='checkicon'/>Monthlt 3 Bureaos Reports & Scores</li>
              </ul>
              <h5>Smartcredit</h5>
              <ul className='ml-24'>
                <li> <FaCheckCircle  className='checkicon'/>Identity Theft Insurance ($1m)</li>
                <li><FaCheckCircle  className='checkicon'/>Credit Monitoring & Alerts (TU)</li>
              </ul>
              <p className='text-center cardtext'>Includes SmartCredit Money Manager with 2 monthly Transunion Report &  Score updates in SmartCredit.</p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
     
    </>
  )
}
