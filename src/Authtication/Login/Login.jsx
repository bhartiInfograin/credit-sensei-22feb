import React from 'react';
import AuthHeader from '../AuthCommon/AuthHeader';
import Footer from "../../Common/Footer"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function Login() {

    return (
        <>
            <AuthHeader text={"Don’t have an account?"} action={"Signup"} url={"/createAccount"} />
            <section className="login_section">
            <Container className='mt-3'>
                <Row>
                    <Col lg={{span:10, offset:1}} md={12}>
                    <Row>
                    <Col lg={4} md={4} className="px-0" >

                        <div className="singupform">
                            <h5>Credit Repair used to be hard</h5>
                            <p>We made it easy</p>
                            <h3>Your beginning to a better credit score !</h3>
                        </div>
                    </Col>
                    <Col lg={8} md={8} className="px-0">
                        <div className='mainform'>
                            <div className='Login_form '>
                                <Form.Label className="mt-3 fromlabel"  >Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                                <Form.Label className="mt-3 fromlabel">Password</Form.Label>
                                <Form.Control type="password" placeholder="Your Password" />
                                <Form.Group className="mb-3 fromlabel" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Form.Label className="fromlabel"><Link to="/forgotpwd" className='forgotpwd'>Forgot Your Password ?</Link></Form.Label>
                                <Link to="/useHome" className='navmenubutton'><Button className='signBtn btn-dark fromlabel'> Login </Button></Link> 
                            </div>
                        </div>
                    </Col>
                </Row>
                    </Col>
                </Row>
              
            </Container>
           </section>
            <Footer />
        </>
    )
}
