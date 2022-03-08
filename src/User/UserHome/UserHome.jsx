import React, { useState, useEffect } from 'react';
import UserHeader from '../Common/UserHeader';
import { Container, Row, Col, Button, Modal, Image, Table } from 'react-bootstrap';
import { FaTimes, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

import Footer from '../../Common/Footer';
import card from "../../asset/image/Capture 1.png"
import Graph from './Graph';
import { Link } from 'react-router-dom';



export default function UserHome() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow()
  }, []);


  return (
    <>
      <UserHeader />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title> Welcome  Username</Modal.Title>
          <FaTimes onClick={handleClose} />
        </Modal.Header  >
        <Modal.Body>
          <div className='usename_modal'>
            <h5>Link your 3 bureau credit report to activate Credit Sensei's automated dispute features.</h5>
            <Button className='usename_modal_btn' style={{ background: "#14684e", border: "none" }}>SEE HOW IT WORKS</Button>
            {/* <h6>  Or continue to your free Credit Sensei account to access:</h6>
            <Button className='usename_modal1_btn' style={{ background: "#4b7a7c", border: "none" }}>DISPUTE LETTER TEMPLATES</Button>
            <Button className='usename_modal1_btn' style={{ background: "#4b7a7c", border: "none" }}>CREDIT COACHING VIDEOS</Button> */}
          </div>
        </Modal.Body>
      </Modal>

      <Graph />

      <Container>
        <Row>
          <Col lg={{span:10,offset:1}} md={12}>
            <div className='sec_provider mt-5'>
              <h1>Credit Report Provider</h1>
              <Link to="/usercreditreport"><FaArrowRight style={{ color: "#14684e", fontSize: "22px", marginRight: "22px" }} /></Link>
            </div>
          </Col>
          <Col lg={{span:10,offset:1}} md={12}>
            <div className="section__content">
              <Table striped bordered hover className='table table--provider'>
                <tbody>
                  <tr>
                    <td>
                      <label>Company</label>
                      <a href='#'>Choose Membership</a>
                    </td>
                    <td>
                      <label>Status</label>
                      <span>-</span>
                    </td>
                    <td>
                      <label>Next 3 Bureau Update</label>
                      <span>-</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span:10,offset:1}} md={12}>
            <div className='creditItems_sectionContent_heading '>
              <h1 className='section__title ' >Credit Items</h1>
              <Link to="/creditItem"><FaArrowRight style={{ color: "#14684e", fontSize: "22px", marginRight: "22px", marginLeft: "12px" }} /></Link>
            </div>
            <div className='creditItems_sectionContent '>
             <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" >Accounts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Public Records</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Inquiries</a>
                </li>
              </ul>
              {/* <Link to="/creditItem"><FaArrowRight style={{ color: "#4b7a7c", fontSize: "22px", marginRight: "22px", marginLeft: "12px" }} /></Link> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span:10,offset:1}} md={12}>
            <div className=' crditItemtable'>
              <Table class="table" responsive>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">TRANSUNION</th>
                    <th scope="col">EXPERIAN</th>
                    <th scope="col">EQUIFAX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className='text-success'>Positive</th>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                  </tr>
                  <tr>
                    <th scope="row" className='text-success'>Repaired</th>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                  </tr>
                  <tr>
                    <th scope="row" className='text-success'>Deleted</th>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                  </tr>
                  <tr>
                    <th scope="row" className='text-warning'>Disputing</th>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                  </tr>
                  <tr>
                    <th scope="row" className='text-danger'>Negative</th>
                    <td>n/a</td>
                    <td>n/a</td>
                    <td>n/a</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
      <section className='mb-5  '>
        <Container>
          <Row>
            <Col lg={{span:5,offset:1}} md={6} className="mt-5">
              <div className='personal_offer'>
                <h1 >Personal Offers</h1>
                <FaArrowRight style={{ color: "#14684e", fontSize: "22px", marginRight: "22px", marginLeft: "12px" }} />
              </div>
              <div className='personaloffer_card'>
                <h3>
                  Credit Card Offers
                </h3>
                <Image className='cardimg img-fluid' src={card} />
              </div>
            </Col>
            <Col lg={{span:4,offset:1}} md={6} className="mt-5">
              <div className='myaccount'>
                <h1>My Account</h1>
                <Link to="/myaccount"><FaArrowRight style={{ color: "#14684e", fontSize: "22px", marginRight: "22px", marginLeft: "12px" }} /></Link>
              </div>
              <div className="myaccount_user">
                <ul>
                  <li className='username'>Username</li>
                  <li>user@gmail.com</li>
                  <li>1500 osprey
                    atlanta, GA 30326</li>
                  <li>Photo ID  <FaCheckCircle style={{ color: "gray" }} /> <a href='#'>Add It</a> </li>
                  <li>Proof of address  <FaCheckCircle style={{ color: "gray" }} /> <a href='#'>Add It</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}


