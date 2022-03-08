import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button,Accordion } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import Footer from '../../Common/Footer';
import UserHeader from '../Common/UserHeader';
import ProfileNav from './Common/ProfileNav';



export default function Mydocs() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function onClickHandler() {
        var el = window._protected_reference = document.createElement("INPUT");
        el.type = "file";


        el.addEventListener('change', function () {

            if (el.files.length) {
                document.getElementById('out').innerHTML = el.files[0].name;

            }
            //   new Promise(function(resolve) {
            //     setTimeout(function() { console.log(el.files); resolve(); }, 1000);
            //   })
            //   .then(function() {
            //     // clear / free reference
            //     el = window._protected_reference = undefined;
            //   });
        });
        el.click();

    }


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
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Attach File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='attachfile'>
                        <h1>Browse your file here</h1>
                        {/* <span>or</span> */}
                        <Button style={{ background:"#4b7a7c",border:"none"}}   onClick={onClickHandler}>BROWSE</Button>
                    </div>
                    <div id="out"></div>


                </Modal.Body>
                <Modal.Footer >

                    <Button  style={{ width: "100%", fontSize: "17px", background:"#4b7a7c",border:"none"  }}>save</Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className='photoid'>
                            <h1>PHOTO ID</h1>
                            <FaExclamationTriangle style={{ color: '#f3cc0a', fontSize: "24px" }} /><a onClick={handleShow} >Add New</a>
                        </div>

                    </Col>
                    <Col lg={12} md={12}>
                        <div className='photoid'>
                            <h1>PROOF OF ADDRESS</h1>
                            <FaExclamationTriangle style={{ color: '#f3cc0a', fontSize: "24px" }} /><a onClick={handleShow}>Add New</a>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className='mydoc_faq mt-5'>
                            <h1>FAQ’S</h1>
                        </div>
                    </Col>
                    <Col lg={12} md={12}>
                        <div className='mt-3 p-2'>
                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Lorem epsum doller sit amet?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Lorem epsum doller sit amet?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Lorem epsum doller sit amet?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Lorem epsum doller sit amet?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Lorem epsum doller sit amet?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />



        </>
    )
}
