import React from 'react'
import AuthHeader from '../AuthCommon/AuthHeader';
import Footer from '../../Common/Footer';
import { Container, Row, Col, Form, Button, InputGroup, FormControl, Table } from 'react-bootstrap';

export default function Membership() {
    return (
        <>
             <AuthHeader />
           
           
             <section className='my-5'>
                <Container>
                    <Row>
                        <Col lg={7} md={7} sm={12}>
                            <div className='' >


                            </div>

                        </Col>
                        <Col lg={5} md={5} sm={12}>
                            <div className="membership-table">
                                <div className="heading">
                                    <p>BASIC MEMBERSHIP</p>
                                </div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <td>Smart Credit Report & Scores</td>
                                            <td>2 monthly updates</td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ScoreTraker</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>ScoreBuilder</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>ScoreMaster</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>Actions</td>
                                            <td>5 per month</td>

                                        </tr>
                                        <tr>
                                            <td>Credit Monitering</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>Money Manager</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>3B Report & Scores</td>
                                            <td>a La Carte</td>

                                        </tr>
                                        <tr>
                                            <td>Subscription Start Date</td>
                                            <td>03/03/2022</td>

                                        </tr>
                                        <tr>
                                            <td>Trial Period</td>
                                            <td>--</td>

                                        </tr>
                                        <tr>
                                            <td>Monthly fee starting on 03/03/2022</td>
                                            <td className='payment-price'>$25.00</td>

                                        </tr>
                                    </tbody>
                                </Table>
                                <div className="heading">
                                    <p>PREMIUM MEMBERSHIP</p>
                                </div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <td>Smart Credit Report & Scores</td>
                                            <td>Unlimited</td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ScoreTraker</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>ScoreBuilder</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>ScoreMaster</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>Actions</td>
                                            <td>5 per month</td>

                                        </tr>
                                        <tr>
                                            <td>Credit Monitering</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>Money Manager</td>
                                            <td>Unlimited</td>

                                        </tr>
                                        <tr>
                                            <td>3B Report & Scores</td>
                                            <td>1 per month</td>

                                        </tr>
                                        <tr>
                                            <td>Subscription Start Date</td>
                                            <td>03/03/2022</td>

                                        </tr>
                                        <tr>
                                            <td>Trial Period</td>
                                            <td>--</td>

                                        </tr>
                                        <tr>
                                            <td>Monthly fee starting on 03/03/2022</td>
                                            <td className='payment-price'>$35.00</td>

                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <Footer />
          
        </>
    )
}
