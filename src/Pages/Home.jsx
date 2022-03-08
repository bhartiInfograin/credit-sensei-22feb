import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import People from "../asset/image/people.jpg"
import { FaCheckCircle } from 'react-icons/fa';
import SmartModule from '../Component/Home/SmartModule';
import UnlimitedModule from '../Component/Home/UnlimitedModule';
import CreditScore from '../Component/Home/CreditScore';
import ContactUs from '../Component/Home/ContactUs';
import Header from '../Common/Header';
import Footer from '../Common/Footer'
import hero from '../asset/image/heroImg.jpg'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <>
            <Header />
            <section className='homeheader' >
                <Container>
                    <Row>
                        <Col lg={6} md={6}>
                            <div className='homesectionImg'>
                           
                                    <Image className='homeImg' src={hero} />
                               
                            </div>
                        </Col>
                        <Col lg={6}  md={6}>
                            
                                <div className='homecontent'>
                                    <h2 className='hometitle'>Repair all 3 Credit bureaus.<br /> Increase your Credit Score.<br /> Easily do it yourself</h2>
                                    <div className='homeline' ></div>
                                    <Link to="/createAccount" className='navmenubutton'><Button variant="dark" className='homebutton'>GET STARTED</Button></Link>
                                </div>
                          
                        </Col>
                    </Row>
                </Container>
            </section>
            <UnlimitedModule />
            <CreditScore />
            <SmartModule />
            <section className='module mt-3' style={{ background: "#f7f8fb" }}>
                <Container>
                    <Row>
                        <Col lg={12}  md={12}>
                            <div className='modul_header'>
                                <h4 className='modul_title pb-3'>Dispute any account on all 3 bureaus</h4>
                                <p className='modul_text'>Credit Sensei can help you delete these accounts from Experian, Equifax, and TransUnion:</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}  md={12} >
                            <div className='modul_content'>
                                <ul className='account_feature'>
                                    <li ><FaCheckCircle className='modul_check' /><span>Late Payments</span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Repossessions</span> </li>
                                    <li><FaCheckCircle className='modul_check' /><span>Charge Offs</span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Foreclosures</span></li>
                                    <li style={{ marginLeft: "-9px" }}><FaCheckCircle className='modul_check' /><span>Collections </span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Judgments</span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Inquiries</span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Bankruptcy</span></li>
                                </ul>
                                <p className='modul_text '> No need to create an account with each credit bureau. Credit Sensei brings all three <br /> credit bureaus to you.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <ContactUs />
            <Footer />
        </>
    )
}
