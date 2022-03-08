import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import UserHeader from '../Common/UserHeader';
import ProfileNav from './Common/ProfileNav';


export default function Myaccount() {
    return (
        <>

            <UserHeader />
            <ProfileNav
                title="Myaccount"
                menu1="Profile"
                menu2="My Docs"
                menu3="Credit Report"
                url1="myaccount"
                url2="mydocs"
                url3="usercreditreport" />

            <Container className='mb-5'>
            
                <Row style={{background:"#fff" , boxShadow:"0 0 3px 0 rgba(0 0 0/10%)"}}>
                   
                    <Col lg={6} md={6}>
                        <div className=' mt-3 p-3'>
                            <h5 className='mb-3'>Personal Details</h5>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="email" placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="password" placeholder="Last Name" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="password" placeholder="Phone Number" />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="Address" />
                                </Form.Group>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control placeholder="Enter your city" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control placeholder="Enter Zip" />
                                    </Form.Group>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <Row>
                            <Col>
                                <div className=' mt-3 p-3'>
                                    <h5>Security</h5>
                                    <Form.Label className="mt-3 fromlabel">Current password</Form.Label>
                                    <Form.Control className="" type="password" placeholder="your current password" />
                                    <Form.Label className="mt-3 fromlabel">New password</Form.Label>
                                    <Form.Control placeholder="Enter your new password" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='mt-3 p-3' >
                                    <h5>Identity</h5>
                                    <Form.Label className="mt-3 fromlabel">Additional First Name</Form.Label>
                                    <Form.Control className="" type="password" placeholder="Additional First Name" />
                                    <Form.Label className="mt-3 fromlabel">Additional Last Name</Form.Label>
                                    <Form.Control placeholder="Additional Last Name" />
                                    <div className="myaccount">
                                    <Button className="mt-3 " >Add</Button>
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>
                   
                </Row>
            </Container>
            <Footer />

        </>
    )
}
